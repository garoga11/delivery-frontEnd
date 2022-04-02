import React from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import ProfileComponent from "../../Components/Profile"

export default class Profile extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <Sidebar component = {(<ProfileComponent/>)} />
            </React.Fragment>
        );
    }
}