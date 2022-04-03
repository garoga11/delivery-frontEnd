import React from 'react';
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar';
import CompanyComponent from '../../Components/Company'

export default class Company extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <Sidebar component = {(<CompanyComponent/>)} />
            </React.Fragment>
        );
    }
}