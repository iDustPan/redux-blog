
import { FETCH_POSTS, fetchPosts } from '../actions'
import _ from 'lodash'

export const PostReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
			break;
		default:
	}
	return state;
}
