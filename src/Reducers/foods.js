const INITIAL_STATE ={
    Foods :[]
}
const FoodAdd = (state = INITIAL_STATE , action) =>{
    //console.log(action)
    if(action.type === 'Add_Food'){
        return {
            ...state,
            Foods : state.Foods.concat(action.data)
    }
}
if(action.type === 'FoodDelete'){
     //console.log(action)
        return{
            ...state,
           Foods : [
            ...state.Foods.splice(0, action.data),
            ...state.Foods.splice(1)
           ]
        //Foods : [...state.Foods.splice(0, action.payload), ...state.Foods.splice(1)]
        }
}
    return state

}

export default FoodAdd