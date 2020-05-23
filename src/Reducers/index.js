import Count_cart from './countCart'
import  {combineReducers} from 'redux'
import Foods from './foods'
import Signin from './Signin'
const AllReducers = combineReducers({
    Count_cart,
    Foods,
    Signin,
});

export default AllReducers;

