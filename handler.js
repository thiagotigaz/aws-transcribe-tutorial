'use strict';
const { v4 } = require('uuid');
const AWS = require('aws-sdk');
const transcribeClient = new AWS.TranscribeService();

const outputBucket = process.env.OUTPUT_BUCKET;
const languageCode = 'en-US';

function getMediaFormat(filename) {
  return filename.split('.').pop().toLowerCase();
}

module.exports.transcribe = async (event) => {
  const s3Info = event.Records[0].s3;
  const bucket = s3Info.bucket.name;
  const key = decodeURIComponent(s3Info.object.key.replace(/\+/g, " "));
  const mediaFileUri = `s3://${bucket}/${key}`;
  return transcribeClient.startTranscriptionJob({
    TranscriptionJobName: v4(),
    LanguageCode: languageCode,
    Media: { MediaFileUri: mediaFileUri },
    MediaFormat: getMediaFormat(key),
    OutputBucketName: outputBucket,
    Subtitles: {
      Formats: ['srt']
    },
  }).promise();
};
