module.exports = {
  "Records": [
    {
      "eventVersion": "2.1",
      "eventSource": "aws:s3",
      "awsRegion": "us-east-1",
      "eventTime": "2022-02-19T22:24:35.125Z",
      "eventName": "ObjectCreated:Put",
      "userIdentity": {
        "principalId": "AWS:AIDAJM12345TLNVH2T123",
      },
      "requestParameters": {
        "sourceIPAddress": "47.149.136.15",
      },
      "responseElements": {
        "x-amz-request-id": "YYGGTMKQ16K217H2",
        "x-amz-id-2": "YGN7stTW5vhrawktwixZzo+s6TcKYczrWpupYL9NqLKwZsZBhsnZKbNZA1ULROuqqX0IjvAO549qCz7lhJ8KHuezONVnAW8Q",
      },
      "s3": {
        "s3SchemaVersion": "1.0",
        "configurationId": "96470f75-c622-4633-86eb-437f26347996",
        "bucket": {
          "name": "limascloud-transcribe-input-prod",
          "ownerIdentity": {
            "principalId": "AIDAJM12345TLNVH2T123",
          },
          "arn": "arn:aws:s3:::limascloud-transcribe-input-prod",
        },
        "object": {
          "key": "meditacao+para+sono.mp4",
          "size": 50026588,
          "eTag": "0b37305c9ff76f24b40d1e6ff925aed8",
          "sequencer": "0062116E19CF6BC929",
        },
      },
    },
  ],
};