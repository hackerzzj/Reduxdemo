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
const creator = {
    getListAction,
    inputValueAction,
    additemAction,
    deleteitemAction
}
export default creator