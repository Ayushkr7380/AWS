import {GetObjectCommand, S3Client} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv  from "dotenv";

dotenv.config();

try {
    
    const s3Client = new S3Client({
        region:"ap-south-1",
        credentials:{
            accessKeyId:process.env.accessKeyId,
            secretAccessKey:process.env.secretAccessKey
        }
    });

    async function getObjectURL(key){
    const command = new GetObjectCommand({
        Bucket:"ayush-private",
        Key:key,
    });

    const url = await getSignedUrl(s3Client,command);
    return url;
}

async function init(){
    console.log("Url is : ", await getObjectURL("f1.jpg"));
}
init();
} catch (error) {
    console.log(error.message);
}