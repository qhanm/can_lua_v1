import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import {Color} from "../../utils/Constant";
import Close from "../icons/Close";

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
    rowHeader: {
        alignItems: 'center',
        borderBottomColor: Color.Red,
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    subRow: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    rowItem: {
        width: '90%',
        backgroundColor: 'blue',
        marginTop: 10,
        borderColor: Color.Silver,
        borderWidth: 1,
    },
    item: {
        flexDirection: 'row',
    }
});

export default class CalculatorComponent extends React.Component
{
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.rowResult}>
                        <View style={styles.rowHeader}>
                            <Text style={{fontSize: 22, color: Color.Red, fontWeight: 'bold'}}>Kết Quả</Text>
                        </View>
                        <View style={styles.subRow}>
                            <View style={styles.rowItem}>
                                <View style={styles.item}>
                                    <Text>Sub row</Text>
                                    <Text>Sub row</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text>Sub row</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text>Sub row</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}