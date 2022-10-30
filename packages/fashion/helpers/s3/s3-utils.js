import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"

export async function readS3Object (bucketName, bucketKey) {
    const s3Client = new S3Client({
        region: "<region>",
        credentials: {
            accessKeyId: "<accessKeyId>",
            secretAccessKey: "<secretAccessKey>"
        }})
    return await s3Client.send(new GetObjectCommand({
      Bucket: bucketName,
      Key: bucketKey,
      ResponseContentType: "image/png"
    }))
  }