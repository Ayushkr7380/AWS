exports.ayush = async(event)=>{
    return{
        statusCode : 200,
        headers:{
            "content-Type":"Application/json"
        },
        body:JSON.stringify({
            message:"Hello from ayush Vs code."
        })
    }
}