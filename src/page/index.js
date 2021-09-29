import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [
                {cid: 123, title: '技术胖的个人博客1'},
                {cid: 456, title: '技术胖的个人博客2'},
                {cid: 789, title: '技术胖的个人博客3'}
            ] 
        }
        console.log(this.props)
        this.props.history.push('/home/',{zxbm:'jspang'})
        console.log(this.props)
    }
    render() { 
        return (  
            <>
            {/* <Redirect to='/home/' /> */}
            <h2>jspang.com</h2> 
            <ul>
                {this.state.list.map((value,indx)=>{
                    return (
                       <li key={indx}><Link to={`/list/${value.cid}`}>{value.title}</Link> </li>
                    )
                })}
            </ul>
            </>
        );
    }
   
}
 
export default Index;