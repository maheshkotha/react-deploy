import React from 'react'
import Navi from './Navi'

function Header(props) {
    const header = {
        height: "20vh",
        paddingTop: '15px'
    }
    return (
        <header className="header" style={header}>
            <h1 style={{textTransform: "uppercase", margin: '0'}}>{props. name}</h1>
            <Navi />
        </header>
    );
}


export default Header
    