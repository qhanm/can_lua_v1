import React from 'react';
import {ScrollView, View, SafeAreaView} from "react-native";
import CustomerScreen from "../../screens/CustomerScreen";
import CustomerComponent from "./CustomerComponent";

class ListCustomer extends React.Component
{
    render() {
        return (
            <SafeAreaView>
                <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
                    <CustomerComponent navigation={this.props.navigation}/>
                    <CustomerComponent navigation={this.props.navigation}/>
                    <CustomerComponent navigation={this.props.navigation}/>
                    <CustomerComponent navigation={this.props.navigation}/>
                    <CustomerComponent navigation={this.props.navigation}/>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default ListCustomer;