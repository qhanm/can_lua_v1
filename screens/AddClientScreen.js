import React, {Component} from 'react';
import {View, Text} from "react-native";
import HeaderCustom from "../components/layout/HeaderCustom";
import AddClientComponent from "../components/client/AddClientComponent";

export default class AddClientScreen extends Component
{
    render() {
        return (
            <View>
                <HeaderCustom navigation={this.props.navigation} />
                <AddClientComponent />
            </View>
        )
    }
}