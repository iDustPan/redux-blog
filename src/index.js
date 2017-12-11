
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Store from './store';
import { Provider } from 'react-redux';
import PostIndex from './component/post_index';


ReactDom.render(
    <Provider store={Store}>
        <PostIndex />
    </Provider>,
    document.getElementById('container')
);
