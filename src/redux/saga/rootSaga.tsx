import { put, takeEvery, all } from 'redux-saga/effects'
import mySaga from '.'



function* incrementAsync() {
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    mySaga(),
  ])
}