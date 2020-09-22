import React, {Component} from 'react';
import Post from '../../../components/Post/Post';
import './Posts.css';
import axios from '../../../axios';
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
        // axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then((res) =>{
        //     console.log(res);
        //     this.setState({fullPost: res.data});
        // });

        this.setState({id: id});
    }

    render(){

        let posts = <p>Sorry couldnot retrieve post</p>
        if(!this.state.showError){
            posts = this.state.posts.map((post) => <Post key = {post.id} id = {post.id} getPostDetailsHandler = {this.getPostDetailsHandler} title = {post.title} author = {post.author} />)
        }
        return (
            <section className = "Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;