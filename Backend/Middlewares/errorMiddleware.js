
const errorMiddleware = async(error, req,res,next)=>{
    
    let defaultError = {
        statusCode : 400,
        message: error
    }

    // res.send(
    //     {
    //         status: false,
    //         message: "There is some error",
    //         error
    //     }
    // )

// Missing Fields Error
    if(error.name === "ValidationError"){
        defaultError.statusCode = 500,
        defaultError.message = Object.values(error.errors).map((item)=> item.message)
        .join(",");
    }

// Duplicate Error

if(error.code && error.code === 11000){
    defaultError.statusCode = 400;
    defaultError.message = `${Object.keys(error.keyValue)}, Field has to be Unique.`;
}

res.status(defaultError.statusCode).json({message: defaultError.message})
}

export default errorMiddleware;