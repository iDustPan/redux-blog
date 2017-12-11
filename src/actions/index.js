
import axios from 'axios'
export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => {
	return {
		type: FETCH_POSTS,
		payload: axios.get(`http://reduxblog.herokuapp.com/api/posts?key=pan12345`)
	};
}
