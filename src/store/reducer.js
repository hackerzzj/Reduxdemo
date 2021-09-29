
const defaultState = {
    inputValue: 'jspang',
    list: []
}
export default (state=defaultState, action)=>{
    if (action.type === 'inputChange') {
        return Object.assign({},state,{inputValue: action.data})
    } else if (action.type === 'additem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        return newState
    } else if (action.type === 'deleitem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.data,1)
        return newState
    }
    return state
}