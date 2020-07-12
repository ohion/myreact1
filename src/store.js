import { createStore } from 'redux';

// 一个应用中我们只有一个store，存储了全部数据状态，但是会有很多reducer，通过这些reducer合起来创建store需要用到combineReducers方法。

//初始状态
const initialState = {
  data: [{
      "key": "1",
      "name": "王大斌",
      "gender": "男"
    },{
      "key": "2",
      "name": "刘小洋",
      "gender": "男"
    }]
}
//创建reducer方法，先原封不动返回state
const myreducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return {
                ...state,
                data:state.data.concat(action.payload)
              }
        default: 
            return state;
      }
}
//   触发action 
// store.dispatch(myaction);

//创建store存储区，它只能通过reducer作为参数来构造
const store = createStore(myreducer);
export default store