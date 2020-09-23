import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state = {
        fullPost : null
    }
    deleteHandler = () =>{
        axios.delete("/posts/"+this.state.fullPost.id).then((res) =>{
            console.log(res);
        })
    }
    componentDidMount(){
        this.getData();
    }

    componentDidUpdate(){
        this.getData();
    }

    getData = ()=>{
        console.log(this.props);
        if(this.props.match.params.id){
            
            if(!this.state.fullPost || (this.state.fullPost && this.state.fullPost.id != this.props.match.params.id)){
                // do not update state if new data is not fetched because every update will trigger this lifecycle hook and cause infinite loop
                // get backend data.
                axios.get('/posts/'+this.props.match.params.id).then((res) =>{
                    this.setState({fullPost: res.data});
                })
            }
        }
    }
    render () {
        let post = <p>Please select a Post!</p>;
        if(this.state.fullPost){
        post = (
            <div className="FullPost">
                <h1>{this.state.fullPost.title}</h1>
        <p>{this.state.fullPost.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={this.deleteHandler}>Delete</button>
                </div>
            </div>

        );
        }
        return post;
    }
}

export default FullPost;