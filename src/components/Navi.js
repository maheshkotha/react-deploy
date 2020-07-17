import React from 'react'
import styles from './Navi.css';

function Navi() {
    const list = {
        listStyleType: "none",
        fontSize: "20px",
        textTransform: "Capitalize"
    }
    const link = {
        color: "black",
        textDecoration: "none"
    }
    return (
        <div>
            <ul style={list}>
                <li className="list-item"><a style={link} href="">home</a></li>
                <li className="list-item"><a style={link} href="">services</a></li>
                <li className="list-item"><a style={link} href="">about</a></li>
                <li className="list-item"><a style={link} href="">contact</a></li>
            </ul>
        </div>
    )
}

export default Navi
