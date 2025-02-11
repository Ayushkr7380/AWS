exports.welcome = async(e)=>{
    return{
        statusCode:200,
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify({
            message:"Welcome to ayush 2nd function serverless deploy from vs code."
        })
    }
}