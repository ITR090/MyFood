
const Count_cart =(state = 0,action)=>{
    if(action.type ==='AddToCart'){
        return state + 1
    }
    if(action.type === 'DeleteFromCart'){
        return state - 1
    }
    return state
}
export default Count_cart