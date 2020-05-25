export const Singin =() =>{
    return{
        type : 'SING_IN'
    }
}

export const userName = (name)=>{
    return{
        type : 'USER_NAME',
        data :name
    }
}
export const User_Message = (info)=>{
    return{
        type : 'USER_MESSAGE',
        data :info
    }
}