import React, { Component } from 'react';
import store from './store';
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
    componentDidMount(){
        store.subscribe(this.updateState)
        const mylistaction = actionCreator.getMyListAction()
        store.dispatch(mylistaction)
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