


export const FoodsAction = (item)=>{
    return {
        type : 'Add_Food',
        data : item
    }
}


export const FoodDelete = (item) =>{
    return {
        type : 'FoodDelete',
        data : item
    }
}

