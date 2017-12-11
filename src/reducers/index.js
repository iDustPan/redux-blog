
import { combineReducers } from 'redux';
import { PostReducer } from './reducer_get_posts'

const RootReducer = combineReducers({
	posts: PostReducer
});

export default RootReducer;
