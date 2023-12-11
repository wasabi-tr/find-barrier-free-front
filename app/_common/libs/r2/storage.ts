import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandInput,
  DeleteObjectCommand,
  DeleteObjectCommandInput,
} from '@aws-sdk/client-s3'
import path from 'path'

const client = new S3Client({
  region: 'auto',
  endpoint: process.env.CLOUDFLARE_ENDPOINT as string,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.CLOUDFLARE_ACCESS_KEY as string,
  },
})

export const putImage = async (file: File, dir: 'factory' | 'avatar') => {
  const fileExt = file.name.split('.').pop()
  const pathname = `${Math.random()}.${fileExt}`
  const contentType = file.type
  const buffer = Buffer.from(await file?.arrayBuffer())

  const uploadParams: PutObjectCommandInput = {
    Bucket: 'find-barrier-free',
    Key: `${dir}/${pathname}`,
    Body: buffer,
    ContentType: contentType,
    ACL: 'public-read',
  }

  const command = new PutObjectCommand(uploadParams)
  try {
    await client.send(command)
  } catch (error) {
    console.error('アップロードエラー:', error)
    // エラー処理をここに追加
  }
  // console.log(`${process.env.IMAGE_HOST_URL}/${dir}/${pathname}`)

  return `${process.env.IMAGE_HOST_URL}/${dir}/${pathname}`
}

export const deleteImage = async (pathname: string) => {
  const uploadParams: DeleteObjectCommandInput = {
    Bucket: 'find-barrier-free',
    Key: pathname,
  }

  const command = new DeleteObjectCommand(uploadParams)
  return client.send(command)
}
