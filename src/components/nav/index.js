import React from 'react'
import {Link} from 'react-router-dom';  
import { Menu, Dropdown ,Button} from 'antd';
import { DownOutlined } from '@ant-design/icons';
 export default class Nav extends React.Component{
    logout(){

    }
    render(){
        const menu = (
            <Menu>
              <Menu.Item key="0">
                <Link to="http://www.alipay.com/">详细资料</Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="http://www.taobao.com/">修改密码</Link>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3" onClick={this.logout}>退出</Menu.Item>
            </Menu>
          )
        return (
            <nav>
                <div className="left">
                <Button type="primary"><Link to='/a'>假装自己是个导航</Link></Button>
                <Button><Link to='/b'>假装自己是另一个</Link></Button>
                <Button><Link to='/login'>login</Link></Button>

                </div>
                <div className="right">
                    <div className="headbox">
                        <Dropdown overlay={menu} trigger={['click']}>
                            <Link className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt=""/><DownOutlined />
                            </Link>
                        </Dropdown>
                    </div>
                </div>
            </nav>
        )
    }
}