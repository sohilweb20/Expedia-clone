export const getLocalData = (key) => {
    if(key){
        const data = localStorage.getItem(key)
        return data;
    }
}

export const saveLocalData = (key,value) => {
    if(key && value){
        localStorage.setItem(key,value);
    }
}

export const SaveUserLocal = (key, data) =>{
    localStorage.setItem(key,JSON.stringify(data))
}

export const GetUserLocal = () =>{
    let username = localStorage.getItem("user")
    username = JSON.parse(username)
    return username
}