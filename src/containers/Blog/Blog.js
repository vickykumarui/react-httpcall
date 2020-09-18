import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        id: null,
        showError: false
    };

    componentDidMount() {
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
        // axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then((res) =>{
        //     console.log(res);
        //     this.setState({fullPost: res.data});
        // });

        this.setState({id: id});
    }
    render () {

        let posts = <p>Sorry couldnot retrieve post</p>
        if(!this.state.showError){
            posts = this.state.posts.map((post) => <Post key = {post.id} id = {post.id} getPostDetailsHandler = {this.getPostDetailsHandler} title = {post.title} author = {post.author} />)
        }
      

        
        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                   <FullPost id = {this.state.id} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;