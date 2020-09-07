import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideBarCustom from "../components/layout/SideBarCustom";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

class HomeDrawer extends React.Component
{
    render() {
        return (
            <Drawer.Navigator drawerContent={ props =>  <SideBarCustom {...props} /> } >
                <Drawer.Screen name="ClientScreen" component={HomeScreen}/>
            </Drawer.Navigator>
        )
    }
}

export default HomeDrawer;
