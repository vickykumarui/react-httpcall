import React, {Component} from 'react';
import Post from '../../../components/Post/Post';
import './Posts.css';
import axios from '../../../axios';
import FullPost from '../FullPost/FullPost';
import {Route} from 'react-router-dom';
// import { Link } from 'react-router-dom';
class Posts extends Component {

    state = {
        posts: [],
        id: null,
        showError: false
    };

    componentDidMount() {
        console.log("props posts", this.props );
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) =>{
            console.log(res);
            const posts = res.data.slice(0,4);
            const updatePosts = posts.map( post => {
                return { ...post, author: 'Vicky'}; 
            });
            this.setState({posts: updatePosts});
        })
        .catch((err) =>{
            console.log(err);
            this.setState({showError: true, posts: []});
        });
    }

    getPostDetailsHandler = (id) => {
        console.log(id);
     // this.props.history.push({pathname: '/'+id});
      this.props.history.push(this.props.match.url+'/'+id);
    }

    render(){

        let posts = <p>Sorry couldnot retrieve post</p>
        if(!this.state.showError){
            posts = this.state.posts.map((post) => {
            return (
            // <Link to={'/'+post.id} key = {post.id}>
            <Post key = {post.id} getPostDetailsHandler = {this.getPostDetailsHandler.bind(this, post.id)} title = {post.title} author = {post.author} />
            // </Link>
            )
            })
        }
        return (
            <section className = "Posts">
                {posts}
                <Route path={this.props.match.url+"/:id"} component={FullPost} />
            </section>
        )
    }
}

export default Posts;