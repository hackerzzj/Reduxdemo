import React, { Component } from 'react';
import store from './store';
import axios from 'axios'
import './mock/mock'
import actionCreator from './store/actionCreator'
import { TodoList } from './TodoList';
class App extends Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this)
        this.inputValueChange = this.inputValueChange.bind(this)
        this.state = store.getState();
        
    }
    a() {
        console.log('执行a函数')
    }
    b(){
        console.log('执行b函数')
    }
    componentDidMount(){
        // 定义在这里不会报警告
        store.subscribe(this.updateState)
        store.dispatch(actionCreator.getList())
        // axios.get('http://mockdata.reduxdemo.com').then(
        //     res => {
        //         let action  = actionCreator.getListAction(res.data.data)
        //         store.dispatch(action)
        //     }
        // )
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
        return <TodoList 
            inputValueChange={this.inputValueChange} 
            state={this.state}
            additem={this.additem}
            deleteItem={this.deleteItem}
         />
    }
}
 
export default App;