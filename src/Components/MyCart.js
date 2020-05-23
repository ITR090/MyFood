import React from 'react';
import {connect} from 'react-redux'
import Header from './Header'
import {store} from '../index'
import {Link} from 'react-router-dom'
import {DeleteFromCart} from '../Action/countCart'
import {FoodDelete} from '../Action/foods'
class MyCart extends React.Component{
    
    
    RemovefromMyCart = (foodItem)=>{
       
         //console.log(this.props.FoodsDelete(foodItem))
         console.log()
        //console.log(foods)
        if(window.confirm('Are you sure?')){
            
            this.props.DeleteFromCart()
            
            this.props.FoodsDelete(this.props.Foods.Foods.indexOf(foodItem))
        }
        return false
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
                <h5>My Cart</h5>
                <div className='row'>
                    { this.props.Foods.Foods.length > 0
                
                    ? this.props.Foods.Foods.map( food  =>{
                        return(
                            <div key={Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)} className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                                   <div className='card'>
                                          <div>
                                             <img className="card-img-top" src={food.image}  alt="..."/>
                                           </div>
                                             <div className="card-body">
                                                  <h6 className="card-title">{food.label}</h6>
                                                  <p className="card-text">Category : {food.category}</p>
                                              </div>
                                      <button className="btn btn-danger btn-block" onClick={()=>{this.RemovefromMyCart(food)}}>remove</button>
                                   </div>                               
                            </div>
                        )
                    })
                    :  <Link style={{ textDecoration: "none" }} to='/' className='pl-3'>No Foods In Your Cart Go To Shopping Foods</Link>
                    }
                   {/* <h5> {this.props.Foods.Foods.length >0 ? this.props.Foods.Foods[0].food.category : ''}</h5> */}
                     
                </div>
            </div> 
           </React.Fragment>
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        Foods : state.Foods,
        Count_cart : state.Count_cart
    }
}


const mapDispatchToProsp = (dispatch)=>{
    
    return{
        DeleteFromCart : () => {dispatch(DeleteFromCart())},
        FoodsDelete : (food)=>{dispatch(FoodDelete(food))}
    }
}

export default connect(mapStateToProps,mapDispatchToProsp)(MyCart)