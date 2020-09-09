import React from 'react';
import {Text, View} from "react-native";
import HeaderCustom from "../components/layout/HeaderCustom";
import CalculatorComponent from "../components/calculator/CalculatorComponent";

export default class CalculatorScreen extends React.Component
{
    render() {
        return (
            <View>
                <HeaderCustom navigation={this.props.navigation} />
                <CalculatorComponent />
            </View>
        )
    }
}