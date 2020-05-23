import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {useSelector} from 'react-redux'

const Header = (props)=>{
     const counter = useSelector(state => state.Count_cart );
     //const dispatch =useDispatch();
    return (
        <header className='mb-5'>
        <nav className="navbar  navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to='/'>MyFood</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
               <Link style={{ textDecoration: "none" }} className='nav-link' to='/'>
               <li className="nav-item active">
                             My Food <span className="sr-only">(current)</span>
               </li>
               </Link>
               <Link style={{ textDecoration: "none" }} className='nav-link' to='/About'>
               <li className="nav-item">
                         About Us
               </li>
               </Link>
               {props.Signin.Signin 
               ? 
               <Link style={{ textDecoration: "none" }} className="nav-link" to='Contact'>
               <li className="nav-item">
                         Contact Us
               </li>
               </Link>
               : null}
               <Link style={{ textDecoration: "none" }} className="nav-link" to='MyCart'>
               <li className="nav-item">
                    <span className={props.count_cart_color}>{counter}</span> My Cart<i className="fas fa-shopping-cart"></i>
               </li>
               </Link>
           </ul>
           <ul className='navbar-nav ml-auto'>
               {/* <Link style={{ textDecoration: "none"}} className="nav-link" to=''>
                   <li className='nav-item'>
                       Log IN
                   </li>
               </Link> */}
               {
                   props.Signin.UserName === '' 
                   ?
                   <Link style={{ textDecoration: "none"}} className="nav-link" to='Singin'>
                   <li className='nav-item'>
                      Sign In
                   </li>
                   </Link> 
                   :
                   <div>
                       <li className='nav-item'>Welcome {props.Signin.UserName}</li>
                   </div>
               }
           </ul>
       </div>
        </nav>
    </header>
    )
}


const mapStateToProps =(state)=>{
    return{
        Signin : state.Signin,
        UserName : state.UserName
    }
}

export default connect(mapStateToProps)(Header);