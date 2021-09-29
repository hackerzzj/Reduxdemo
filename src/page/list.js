import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <h1>List-page->{this.state.id}</h1> );
    }
    componentDidMount(){
        let tempid = this.props.match.params.id
        this.setState({id: tempid})
    }
}
 
export default List;