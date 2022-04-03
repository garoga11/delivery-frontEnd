import React from 'react';
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar';
import PhysicalPersonComponent from '../../Components/PhysicalPerson'

export default class PhysicalPerson extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <Sidebar component = {(<PhysicalPersonComponent/>)} />
            </React.Fragment>
        );
    }
}