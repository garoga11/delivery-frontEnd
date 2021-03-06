import React from 'react';
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar';
import RequestComponent from '../../Components/Requests'

export default class Profile extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <Sidebar component = {(<RequestComponent/>)} />
            </React.Fragment>
        );
    }
}