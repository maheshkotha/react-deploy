import React from 'react'
import classes from './Main.css';
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';

function Main() {
    const sidebar = {
        position: 'absolute',
        left: '0',
        bottom: "0",
        top: '0'
    }
    const content = {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        width: "70%"
    }
    return (
        <div className="main">
            <SideBar style={sidebar} />
            <Content style = {content} title="Home" />
        </div>
    )
}

export default Main
