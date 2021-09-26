import actionTypes from './actinType'
const defaultState = {
    inputValue: 'Write Someting',
    // data: [
    //     '早上八点起床',
    //     '晚上八点学习',
    //     '会议',
    //     '工作'
    // ]
    data: []
}
const reducer = (state = defaultState, action) => {
    if (action.type === actionTypes.GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.data = action.data
        return newState
    } else if(action.type === actionTypes.CHANG_INPUT){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.data
        return newState
    } else if(action.type === actionTypes.ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        if (newState.inputValue.trim() !== '') {
            newState.data.push(newState.inputValue)
        }
        newState.inputValue = ''
        return newState
    } else if(action.type === actionTypes.DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.data.splice(action.data,1)
        return newState
    }
    return state
}
export default reducer