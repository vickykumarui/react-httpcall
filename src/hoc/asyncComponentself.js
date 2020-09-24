import React, { Component } from 'react';

const LoadAsyncComponent = (loadingFunc) => {
return class extends Component {

    state = {
        component: null
    }
    componentDidMount(){
        loadingFunc()
        .then((res) =>{
            console.log("inasynccomponentself", res);
            this.setState({component: res.default});
        });
    }

    render(){
        const FinalComp = this.state.component;
       
        return FinalComp ? <FinalComp {...this.props} /> :  null;
        
    }

}
}

export default LoadAsyncComponent;