const apiRequest = async(url="", objOptions=null, errMsg=null)=>{
    try {
        const apiResponse = await fetch(url, objOptions)
        if(!apiResponse.ok) throw Error("Error Fetching Data.")
    } catch (err) {
        errMsg=err.Message
    }finally{
        return errMsg
    }

}

export default apiRequest