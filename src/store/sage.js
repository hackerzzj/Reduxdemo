
import {takeEvery, put} from 'redux-saga/effects'
import actionTypes from './actinType'
import axios from 'axios'
import actionCreator from './actionCreator'
function* mySagas(){
    yield takeEvery(actionTypes.GET_MY_LIST, getmylist)
}
function* getmylist(){
    const res = yield axios.get('http://mockdata.reduxdemo.com')
    let action  = actionCreator.getListAction(res.data.data)
    yield put(action)
}
export default mySagas