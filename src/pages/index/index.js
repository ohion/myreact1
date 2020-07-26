import React from 'react'
import Sider from './components/sidebar'
import Nav from './components/nav'
export default class Index extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    componentDidMount() { }
    render(){
        return (
            <>
            <div className="sidebar">
            <Sider/>
          </div>
          <div className="nav"><Nav/></div>
          <div className="main">

            <div>indexjindexjindex</div>
            </div>
            </>
            
        )

    }
}
