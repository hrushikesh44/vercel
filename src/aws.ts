import { S3 } from "aws-sdk";
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();
const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;
const r2Endpoint = process.env.R2_ENDPOINT;

const s3 = new S3({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    endpoint: r2Endpoint
})

//filename = output/erwi84/src/App.tsx
//localFilepath = /home/hrushikesh/cohort/vercel/dist/output/erwi84/src/App.tsx
export const uploadFile = async (fileName: string, localFilepath: string ) => {
    const fileContent = fs.readFileSync(localFilepath);
    const response = await s3.upload({
        Body:fileContent,
        Bucket: "vercel",
        Key: fileName
    }).promise();
    console.log(response)
}