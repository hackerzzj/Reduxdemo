import React, { Component } from 'react';
import store from './store';
import axios from 'axios'
import './mock/mock'
import actionCreator from './store/actionCreator'
class App extends Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this)
        this.inputValueChange = this.inputValueChange.bind(this)
        this.state = store.getState();
        
    }
    componentDidMount(){
        store.subscribe(this.updateState)
        axios.get('http://mockdata.reduxdemo.com').then(
            res => {
                let action  = actionCreator.getListAction(res.data.data)
                store.dispatch(action)
            }
        )
    }
    updateState(){
        this.setState(store.getState())
    }
    inputValueChange(event) {
        let value = event.target.value
        let action = actionCreator.inputValueAction(value)
        store.dispatch(action)
    }
    additem(){
        let action = actionCreator.additemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        let action = actionCreator.deleteitemAction(index)
        store.dispatch(action)
    }
    render() { 
        return ( <div>
            <div style={{ width: '220px'}}>
            <input type='text' onChange={this.inputValueChange} value={this.state.inputValue}/> 
            <button type='primary' onClick={this.additem}>添加</button>
            </div>
            <div style={{ width: '169px'}}>
            <ul>
                {this.state.data.map(
                    (value, index)=>(
                        <li  style={{cursor:'pointer'}} 
                        key={index} 
                        onMouseEnter={(event)=>{
                            event.target.style.color = 'red'
                        }}
                        onMouseOut={(event)=>{
                            event.target.style.color = ''
                        }}
                        onClick={()=>{this.deleteItem(index)}}>{value}</li>
                    )
                )}
            </ul>
            </div>
        </div> );
    }
}
 
export default App;