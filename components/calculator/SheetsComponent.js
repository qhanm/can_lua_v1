import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import {Color} from "../../utils/Constant";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    rowResult: {
        width: '95%',
        marginTop: 20,
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        borderColor: Color.Silver,
    },
})

export default class SheetsComponent extends React.Component
{
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.rowResult}>
                        <Text>Sheets component</Text>
                    </View>
                    <View style={styles.rowResult}>
                        <Text>Sheets component</Text>
                    </View>
                    <View style={styles.rowResult}>
                        <Text>Sheets component</Text>
                    </View>
                </View>
            </View>
        )
    }
}