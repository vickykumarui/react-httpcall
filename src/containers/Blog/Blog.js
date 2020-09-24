import React, { Component } from 'react';
// import axios from 'axios';
// import Posts from '../../containers/Blog/Posts/Posts';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import LoadAsyncComponent from '../../hoc/asyncComponentself';
// import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';

// const AsyncLoadPost = asyncComponent(() => {
//     return import('./NewPost/NewPost');
// });

class Blog extends Component {

    state = {
        restrictNewPosts: false
    }
    render () {

      
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                to="/posts"
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
               <Switch>
               {/* if we want to restrict some route for authentication purpose we can do it by simply not loading route related to that component */}
               {this.state.restrictNewPosts ? null : <Route path="/new-post" exact component={LoadAsyncComponent(() => { return import('./NewPost/NewPost');})} />}
               <Route path="/posts" component={Posts} />
               <Redirect from = "/" to="/posts" />
               {/* <Route render= {() => <h1>404 not found</h1>} /> //for page not found  */}
               </Switch>

                
            </div>
        );
    }
}

export default Blog;