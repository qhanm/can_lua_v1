import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import HeaderCustom from "../components/layout/HeaderCustom";
import ListCustomer from "../components/customer/ListCustomer";

class CustomerScreen extends React.Component
{
    render() {
        return (
            <View>
                <HeaderCustom navigation={this.props.navigation} />
                <ListCustomer navigation={this.props.navigation}/>
            </View>
        )
    }
}

export default CustomerScreen;
