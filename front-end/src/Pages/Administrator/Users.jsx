import React from 'react';
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar';
import UsersComponent from '../../Components/Users'

export default class Profile extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <Sidebar component = {(<UsersComponent/>)} />
            </React.Fragment>
        );
    }
}