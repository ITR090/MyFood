const INITIAL_STATE = {
    Signin : false,
    UserName : '',
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
    return state
}

export default Singin
