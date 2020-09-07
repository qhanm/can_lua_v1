import React, {Component} from 'react';
import {View} from "react-native";
import HeaderCustom from "../components/layout/HeaderCustom";
import AddCustomerComponent from "../components/customer/AddCustomerComponent";

export default class AddCustomerScreen extends Component
{
    render() {
        return (
            <View>
                <HeaderCustom navigation={this.props.navigation} />
                <AddCustomerComponent />
            </View>
        )
    }
}