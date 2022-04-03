import React from 'react';
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar';
import Products from '../../Components/Products'

export default class Produts extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <Sidebar component = {(<Products/>)} />
            </React.Fragment>
        );
    }
}