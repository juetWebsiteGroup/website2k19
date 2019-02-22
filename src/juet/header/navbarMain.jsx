import React, { Component } from 'react';
import './styles/header.css';
import FirstNavbar from "./firstNavbar";
import SecondNavbar from "./secondNavbar";

class NavBarPackage extends Component{
    render()
    {
        return (
            <>
            <FirstNavbar />
            <SecondNavbar />
            </>
        )
    }
}

export default NavBarPackage;