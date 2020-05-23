import React from 'react';
import Header from './Header'
import {store} from '../index'
const About =()=>{
    let badge_color ='badge badge-'    
    if(store.getState().Count_cart > 0){
        badge_color+='success'
    }else{
        badge_color+='warning'
    }
    return(
        <React.Fragment>
             <Header  count_cart_color={badge_color}/>
        <div className="container">
            <div className='row justify-content-center'>
                <h3>About Us</h3>
                <div className='container'>
                    <p className='text-secondary'>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
                    velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim 
                    ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                     Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem
                    eum fugiat quo voluptas nulla pariatur?"
                    </p>

                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default About;