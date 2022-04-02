import React from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';

export default class Profile extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Navbar></Navbar>
                <Sidebar></Sidebar>
            </React.Fragment>
        );
    }
}