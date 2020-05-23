import React from 'react';
import Header from './Header'
import {store} from '../index'
//import {AddToCart} from '../Action/countCart'
//import {ShowMyName} from '../Action/ShowMyName'
//import {useSelector} from 'react-redux'
const Contact =()=>{
    // const counter = useSelector(state => state.Count_cart )
    // const dispatch =useDispatch()
    //const show_info = useSelector (state => state.ShowMyName)
    let badge_color ='badge badge-'    
    if(store.getState().Count_cart > 0){
        badge_color+='success'
    }else{
        badge_color+='warning'
    }

    return(
        <React.Fragment>
             <Header  count_cart_color={badge_color}/>
            <div className='container'>
              <form method='post'>
                    <div className='form-group'>
                         <label htmlFor="my_name">Your Name</label>
                         <input type="text" className="form-control" id="my_name"  required />
                    </div>
                    <div className="form-group">
                         <label htmlFor="exampleInputEmail1">Email address</label>
                         <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                         <label fohtmlForr="exampleFormControlTextarea1">Your Message</label>
                        <textarea required className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                   
                </form>
              {/* <h6>Contact page {counter}</h6>
              <button onClick={()=> dispatch(AddToCart())}></button> */}
            </div>
      
        </React.Fragment>
    )
}
export default Contact;