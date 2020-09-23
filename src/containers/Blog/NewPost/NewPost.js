import React, { Component } from 'react';

import './NewPost.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        redirectToPosts: false
    }

    postDataHandler = () =>{
        const reqData = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }

        axios.post("/posts", reqData).then((res) =>{
            console.log(res)
            this.props.history.push('/posts');
           // this.setState({redirectToPosts: true});
        });
    }

    render () {
        console.log("props newPosts", this.props);
        let rediect = null;
        if(this.state.redirectToPosts){
            rediect = <Redirect to="/posts" />;
        }
      
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                {rediect}
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick = {this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;