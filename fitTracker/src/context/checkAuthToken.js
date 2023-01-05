function checkAuthToken(){
    const token = window.localStorage.getItem("authToken")
    if (token){
        return true
    }
    return false
}

export default checkAuthToken