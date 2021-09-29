import React, { Component } from 'react';
import App from './App';
import { connect} from 'react-redux'
class TodoList extends Component {
    render() { 
        return ( <App 
            inputValue={this.props.inputValue}
            inputChange={this.props.inputChange}
            clickButton={this.props.clickButton}
            list={this.props.list}
            deleitem={this.props.deleitem}
            /> );
    }
}

const stateToProps=(state)=>{
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const dispatchToProps = (dispatch)=>{
    return {
        inputChange(e) {
            let action = {
                type: 'inputChange',
                data: e.target.value
            }
            dispatch(action)
        },
        clickButton(val){
            let action = {
                type: 'additem',
            }
            dispatch(action)
        },
        deleitem(index){
            let action = {
                type: 'deleitem',
                data: index
            }
            dispatch(action)
        }
    }
}
export default connect(stateToProps,dispatchToProps)(TodoList);