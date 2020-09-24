import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeDrawer from "../drawers/HomeDrawer";
import CustomerScreen from "../screens/CustomerScreen";
import AddClientScreen from "../screens/AddClientScreen";
import AddCustomerScreen from "../screens/AddCustomerScreen";
import CalculatorScreen from "../screens/CalculatorScreen";
import Setup  from '../databases/Setup';

const Stack = createStackNavigator();

class HomeStack extends React.Component
{
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        Setup.install();
    }


    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="HomeScreen" component={HomeDrawer} />
                    <Stack.Screen name="CustomerScreen" component={CustomerScreen} />
                    <Stack.Screen name="AddClientScreen" component={AddClientScreen} />
                    <Stack.Screen name="AddCustomerScreen" component={AddCustomerScreen} />
                    <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default HomeStack;
