import { combineReducers } from 'redux';
import postReducer from './blogPostsReducer';
import productReducer from './productsReducer';

export default combineReducers({
    posts: postReducer,
    products: productReducer
});
