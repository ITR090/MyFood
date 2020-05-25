const INITIAL_STATE = {
    Signin : false,
    UserName : '',
    User_Message : '',
}


const Singin =(state = INITIAL_STATE , action)=>{
    if(action.type === 'SING_IN'){
        return{
            ...state,
            Signin : !state.Signin
        }
    }
    if(action.type === 'USER_NAME'){
        return{
            ...state,
            UserName : state.UserName=action.data

        }
    }
    if(action.type === 'USER_MESSAGE'){
        return{
            ...state,
            User_Message : state.User_Message=action.data
        }
    }
    return state
}

export default Singin
