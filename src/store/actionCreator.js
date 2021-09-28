import axios from '_axios@0.21.4@axios'
import actionTypes from './actinType'
const getListAction = function (data=[]) {
    return {
        type: actionTypes.GET_LIST,
        data
    }
}
const inputValueAction = function (data=[]) {
    return {
        type: actionTypes.CHANG_INPUT,
        data
    }
}
const additemAction = function () {
    return {
        type: actionTypes.ADD_ITEM,
    }
}
const deleteitemAction = function (data = 0) {
    return {
        type: actionTypes.DELETE_ITEM,
        data
    }
}
const getList = function(){
    return function(dispatch){
        axios.get('http://mockdata.reduxdemo.com').then(
            res => {
                let action  = getListAction(res.data.data)
                dispatch(action)
            }
        )
    }
}
const creator = {
    getList,
    inputValueAction,
    additemAction,
    deleteitemAction
}
export default creator