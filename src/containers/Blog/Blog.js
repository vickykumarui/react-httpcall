import React, { Component } from 'react';
// import axios from 'axios';
// import Posts from '../../containers/Blog/Posts/Posts';
import { Route, NavLink } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    
    render () {

      
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                to="/"
                                activeClassName = "my-active"
                                exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to= {{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                    }} >New Post</NavLink>
                            </li>
                            {/* to get relative path for dynamic pathname like below
                            <li>
                                <Link to= {{
                                    pathname: this.props.match.url+'/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                    }} >New Post</Link>
                            </li> */}
                        </ul>
                    </nav>
                </header>
               {/* <Route path="/" exact render = { () => <h1>Home</h1>}/>
               <Route path="/"  render = { () => <h1>Home again</h1>}/> */}
               <Route path="/" exact component={Posts} />
               <Route path="/new-post" exact component={NewPost} />

                
            </div>
        );
    }
}

export default Blog;