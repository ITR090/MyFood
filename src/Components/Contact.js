import React from 'react';
import Header from './Header'
import {store} from '../index'
import {connect} from 'react-redux'
import {User_Message} from '../Action/Singin'
//import {AddToCart} from '../Action/countCart'
//import {ShowMyName} from '../Action/ShowMyName'
//import {useSelector} from 'react-redux'
const Contact =(props)=>{
    // const counter = useSelector(state => state.Count_cart )
    // const dispatch =useDispatch()
    //const show_info = useSelector (state => state.ShowMyName)
    let badge_color ='badge badge-'    
    if(store.getState().Count_cart > 0){
        badge_color+='success'
    }else{
        badge_color+='warning'
    }
    const send = (event)=>{
        event.preventDefault()
        let  userMessage = event.target.User_Message.value;
       setTimeout(() => {
        if(userMessage){
            props.Sign_in(userMessage)
            console.log(props.Signin)
        }
       }, 2000);
        //console.log(event.target.User_Message.value )
        //props.Sign_in()
}
    return(
        <React.Fragment>
             <Header  count_cart_color={badge_color}/>
            <div className='container'>
             {
                 props.Signin.User_Message === ''
                 ? 
            <form method='post' onSubmit={send}>
                 <div className="form-group">
                      <label fohtmlForr="exampleFormControlTextarea1">Your Message</label>
                     <textarea name='User_Message' required className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                 </div>
                 <button type="submit" className="btn btn-primary">Submit</button>
                
             </form>
             : 
            <div class="alert alert-success" role="alert">
             Good {props.Signin.UserName} Your Message Was send it successfly 
           </div>
             }
              {/* <h6>Contact page {counter}</h6>
              <button onClick={()=> dispatch(AddToCart())}></button> */}
            </div>
      
        </React.Fragment>
    )
}

const mapStateToProps =(state)=>{
    return{
        Signin :state.Signin,
        UserName : state.UserName
    }
}
const mapDispatchToProsp = (dispatch)=>{
    return{
        Sign_in : (info)=>{dispatch(User_Message(info))}
    }
}
export default connect(mapStateToProps,mapDispatchToProsp)(Contact);