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