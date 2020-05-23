import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {store} from '../index'
import {Singin} from '../Action/Singin'
import {userName} from '../Action/Singin'
import {Link} from 'react-router-dom'
const Signin = (props)=>{
    let badge_color ='badge badge-'    
    if(store.getState().Count_cart > 0){
        badge_color+='success'
    }else{
        badge_color+='warning'
    }
    const Sign__in = (event)=>{
        event.preventDefault()
      let userName= event.target.name.value
      let userEmail= event.target.email.value
      let userPassword= event.target.password.value
      if(userEmail && userName && userPassword){
        props.User_Name(userName)
        props.Sign_in()
      }

    }
    return(
       <React.Fragment>
           <Header count_cart_color={badge_color}/>
           <div className='container'>
        <form onSubmit={Sign__in} method='post'>
            <div className="form-group">
              <label htmlFor="examplename">Name</label>
              <input type="text" name='name' className="form-control" id="examplename" required/>
            </div>
            <div className="form-group">
               <label htmlFor="exampleInputEmail1">Email address</label>
               <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
               <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
           </div>
           <div className="form-group">
               <label htmlFor="exampleInputPassword1">Password</label>
               <input type="password" name='password' className="form-control" id="exampleInputPassword1" required/>
           </div>
           <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        {
            props.Signin.Signin === false 
            ? null
            : 
            <div className='alert alert-success mt-5' role="alert">
              <Link to='/' style={{ textDecoration: "none"}} className="nav-link text-success">
                  You Are Now logged in Click Here To Start Shopping
              </Link>
            </div>
        }
           </div>
       </React.Fragment>
    )

   

}

const mapStateToProps = (state) =>{
    return{
        Signin : state.Signin,
        UserName : state.UserName
    }
}
const mapDispatchToProsp = (dispatch)=>{
    return{
        Sign_in : ()=>{dispatch(Singin())},
        User_Name : (name)=>{dispatch(userName(name))}
    }
}

export default connect(mapStateToProps,mapDispatchToProsp)(Signin);