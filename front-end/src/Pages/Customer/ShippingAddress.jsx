import React from 'react';
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar';
import ShippingAddressComponent from '../../Components/ShippingAddress'

export default class ShippingAddress extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <Sidebar component = {(<ShippingAddressComponent/>)} />
            </React.Fragment>
        );
    }
}