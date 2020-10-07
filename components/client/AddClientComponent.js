import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from "react-native";
import {Color, DefaultStyle} from "../../utils/Constant";
import { Button } from 'react-native-elements';
import {IconCustom} from "../layout/IconCustom";
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        marginTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    left: {
        width: '30%',
        backgroundColor: Color.Red,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8,
        color: Color.White,
    },
    right: {
      width: '70%'
    },
    input: {
        width: '100%',
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        color: Color.Black,
        fontWeight: 'bold'
    }
})

const Root = () => {
    return <Toast ref={(ref) => Toast.setRef(ref)} />;
};

export default class AddClientComponent extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        }
    }

    componentDidMount() {

    }

    __renderAlert = () => {
        Toast.show({
            text1: 'Hello',
            text2: 'This is some something 👋'
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[DefaultStyle.Card, {width: '95%'}]}>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={{color: Color.White, textAlign: 'center'}}>Tên nhóm</Text>
                        </View>
                        <View style={styles.right}>
                            <TextInput
                                style={[DefaultStyle.InputNumber, styles.input]}
                            />
                        </View>

                    </View>

                    <View style={[styles.row, {width: '100%', justifyContent: 'center'}]}>
                        <Button
                            icon={ IconCustom.Save }
                            title="Lưu"
                            buttonStyle={{paddingLeft: 50, paddingRight: 50}}
                            onPress={() => {
                                console.log('cliclk');
                            }}
                        />
                    </View>
                    { this.__renderAlert() }
                </View>
            </View>
        )
    }
}