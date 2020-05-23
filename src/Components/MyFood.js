import React from 'react';
import Logo from '../Components/landingPage.png'
import Header from './Header'
import Footer from './footer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {store} from '../index'
import {FoodsAction} from '../Action/foods'
class MyFood extends React.Component{

    state={
        hints:[],
    }

    AddToCart =(item)=>{
        this.props.FoodAdd(item)
        this.props.Add()
}

    AllStorage = ()=>{

        if(localStorage.length > 0){
            const foods =[];
            const keys = Object.keys(localStorage)
            let i =keys.length
            while(i >=0){
            if (JSON.parse(localStorage.getItem(keys[i])) !== null){
                  foods.push(JSON.parse(localStorage.getItem(keys[i])) )
            }
             i--
         }
            return foods
        }
        return null
   
}
    // when the user click to Search food button
    SearchFood = async (foodName)=>{
        foodName.preventDefault()
      
        const API_KEY='3159321f640cbf6d64b52ebc0b12477c';
        const APP_ID='e31145a4';
        let myFood = foodName.target.food.value
        if(myFood){
            fetch('https://api.edamam.com/api/food-database/parser?ingr='+myFood+'&app_id='+APP_ID+'&app_key='+API_KEY)
        .then(res=>{
         return  res.json()
        })
        .then(res=>{
            //console.log(res.hints)
            this.setState({hints:res.hints})
            })
        .catch((erorr)=>{
            return new Error('Error: '+erorr)
        })
        }else{
           alert('You must type a food')
        }
        
    }
   componentDidUpdate(){
    this.state.hints.map(food =>{
    const foodsIds =  JSON.stringify(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)) 
    const foodsObjects = JSON.stringify(food.food)
     localStorage.setItem(foodsIds,foodsObjects)
      })
   }
    render(){
        let badge_color ='badge badge-'    
        if(store.getState().Count_cart > 0){
            badge_color+='success'
        }else{
            badge_color+='warning'
        }
        return(
    <React.Fragment>
        <Header  count_cart_color={badge_color}/>
        <div className='container mb-5'>
          <div><img src={Logo} alt="website logo"  width='100%' height='60%'/></div>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <Link style={{ textDecoration: "none" }} to='Singin'>
                    <p className="text-center text-muted mb-3">To contact With Us Sing IN</p>
                    </Link>
                    <form onSubmit={(foodName)=>{this.SearchFood(foodName)}} method="post">
                        <div className='form-group'>
                        <input name="food" type="text" className="form-control" placeholder='Type Your Food'/>
                        </div>
                        <button type="submit" className="btn btn-primary">Search Food</button>
                    </form>
                </div>
            </div>
         </div>
         <div className="container-fluid">
             <div className="row justify-content-center">
                 {
                     
                 this.state.hints.map(hint =>{
                    //console.log(hint.food)
                     return (
                <div key={Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)} className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                   <div className='card shadow bg-white rounded'>
                       <img  className="card-img-top" src={hint.food.image} alt="" />
                   <div className='card-body'>
                       <h5>{hint.food.label}</h5>
                       <p>Category : {hint.food.category}</p>
                       <p>Nutrients:</p>
                       <p>CHOCDF :  {hint.food.nutrients.CHOCDF}</p>
                       <p>ENERC_KCAL :  {hint.food.nutrients.ENERC_KCAL}</p>
                       <p>FAT :  {hint.food.nutrients.FAT}</p>
                       <p>FIBTG :  {hint.food.nutrients.FIBTG}</p>
                       <p>PROCNT :  {hint.food.nutrients.PROCNT}</p>
                       <button type="submit" onClick={()=> this.AddToCart(hint.food)} className="btn btn-outline-primary btn-block">Add To Cart <i className="fas fa-shopping-cart"></i></button>
                   </div>
                  </div>  
                    
                 </div>)
                 })
                 
                 }


                 {
                 
                 this.AllStorage() ? this.AllStorage().map( food =>{
                    // console.log(food)
                     return (
                         <div key={Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}  className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                            <div className='card shadow bg-white rounded'>
                                <img  className="card-img-top" src={food.image} alt="" />
                            <div className='card-body'>
                                <h5>{food.label}</h5>
                                <p>Category : {food.category}</p>
                                <p>Nutrients:</p>
                                <p>CHOCDF :  {food.nutrients.CHOCDF}</p>
                                <p>ENERC_KCAL :  {food.nutrients.ENERC_KCAL}</p>
                                <p>FAT :  {food.nutrients.FAT}</p>
                                <p>FIBTG :  {food.nutrients.FIBTG}</p>
                                <p>PROCNT :  {food.nutrients.PROCNT}</p>
                                <button type="submit" onClick={()=> this.AddToCart(food)} className="btn btn-outline-primary btn-block">Add To Cart <i className="fas fa-shopping-cart"></i></button>
                            </div>
                           </div>  
                             
                          </div>)
                          })
                     : null
                 } 
             </div>
         </div>
         <Footer/>
    </React.Fragment>
        )
    }
}
// to show our storge props
const mapStateToProps = (state)=>{
    return {
        Count_cart : state.Count_cart,
        Foods : state.Foods
    }
}
// to change our state
const mapDispatchToProsp =(dispatch)=> {
 return {
    Add : () => {dispatch({type : 'AddToCart'})},
    FoodAdd : (food) => {dispatch(FoodsAction(food))}
 }
}
//  hoc
export default connect(mapStateToProps,mapDispatchToProsp)(MyFood)