import React, { Component } from "react";
import { conect, connect } from "react-redux";
// import { bindActionCreators } from "redux";
import {Link } from 'react-router';

import { fetchPosts } from "../actions/index";

class PostIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
    console.log(
      "this will be a good time to call action creator to fetch posts"
    );
  }
  render() {
    return <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
      List of blog posts</div>;
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({fetchPosts}, dispatch);
// }

export default connect(null, { fetchPosts })(PostIndex);
