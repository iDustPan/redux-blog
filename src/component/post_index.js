
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions'

class PostIndex extends Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	renderListItem() {
		return _.map(this.props.posts, post => {
			return <li key={post.id}>{post.title}</li>;
		})
	}

	render() {
		return (
			<ul>
				{this.renderListItem()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	return { posts: state.posts };
}

function mapDispatchToProps(dispath) {
	return bindActionCreators(
		{fetchPosts}, dispath
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
