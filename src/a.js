import React, { Component } from 'react';
import {Button} from 'antd'
import store from './store'
class AAA extends Component {
    listerner() {
        let newState = store.getState();
        this.setState(newState);   
      }
      //保持监听
      componentDidMount () {
          store.subscribe(this.listerner.bind(this));
      }
      addData(){
          // action
            //创建描述性对象action
            const myaction = {
                type: 'ADD_DATA',
                payload:{
                        "key": "3",
                        "name": "张胖卓",
                        "gender": "男"
                }
            };
            store.dispatch(myaction);
      }
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>AAA</h1>
                <Button onClick={this.addData}>添加数据</Button>
                <ul>
                {this.state && this.state.data && this.state.data.map((res,index)=>{
                    // console.log('item:',item,'index:',index,"arr:",res,"00")
                         return <li>姓名：{res.name}  性别：{res.gender}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}
export default AAA;