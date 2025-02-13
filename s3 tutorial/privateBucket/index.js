import {
    GetObjectCommand,
    PutObjectCommand,
    S3Client,
    ListObjectsV2Command
    }from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv  from "dotenv";

dotenv.config();
    
const s3Client = new S3Client({
        region:"ap-south-1",
        credentials:{
            accessKeyId:process.env.accessKeyId,
            secretAccessKey:process.env.secretAccessKey
        }
});

//Signed URL GET OBJECT
async function getObjectURL(key){
    const command = new GetObjectCommand({
        Bucket:"ayush-private",
        Key:key,
    });
    const url = await getSignedUrl(s3Client,command);
    return url;
}

//Signed URL PUT OBJECT
async function putObject(filename,contentType){
    const command = new PutObjectCommand({
        Bucket:'ayush-private',
        Key:`uploads/user-uploads/${filename}`,
        ContentType:contentType
    })
    const url = getSignedUrl(s3Client,command);
    return url;
}

//List Object
async function listObjects(){
    const command = new ListObjectsV2Command({
        Bucket:"ayush-private",
        Key:"/"
    })
    const list = await s3Client.send(command);
    console.log(list);
}

async function init(){
    // console.log("Url is : ", await getObjectURL("uploads/user-uploads/video-1739434193984.mp4"));
    // console.log('URL for upoading ',await putObject(`image-${Date.now()}.jpg`,"image/jpg"));
    // console.log('URL for upoading ',await putObject(`video-${Date.now()}.mp4`,"video/mp4"));

    await listObjects();
}

init();
