import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import HeaderCustom from "../components/layout/HeaderCustom";
import ListClientComponent from "../components/client/ListClientComponent";

class HomeScreen extends React.Component
{
    render() {
        return (
            <View>
                <HeaderCustom navigation={this.props.navigation} />
                <ListClientComponent navigation={this.props.navigation} />
            </View>
        )
    }
}

export default HomeScreen;
