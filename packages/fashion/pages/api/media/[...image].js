import {readS3Object} from "../../../helpers/s3/s3-utils";

async function handler(req, res) {
    const bucketName = "ca-dam"
    const { image } = req.query
    const bucketKey = image.join("/")

    const file = await readS3Object(bucketName, bucketKey)
    return file.Body.pipe(res)
}

export default handler