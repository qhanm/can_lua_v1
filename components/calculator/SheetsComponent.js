import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView, TextInput} from "react-native";
import {Color, DefaultStyle} from "../../utils/Constant";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    rowResult: {
        width: '95%',
        // marginTop: 20,
        // borderWidth: 1,
        // paddingTop: 5,
        // paddingBottom: 5,
        // borderColor: Color.Silver,

        backgroundColor:"white",
        marginTop: 20,
        borderRadius:5,
        padding:10,
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
    },
    result: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.Yellow,
        paddingTop: 7,
        paddingBottom: 7,
    },
    rowItem: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: 55,
        textAlign: 'center',
        height: 35,
        fontSize: 18,
        backgroundColor: Color.Sliver3,
        color: Color.Black,
        fontWeight: 'bold',
    },
    textResult: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})

export default class SheetsComponent extends React.Component
{
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.rowResult}>
                        <View style={[styles.row, {alignItems: 'center', justifyContent: 'center'}]}>
                            <Text style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold'}}>Trang Tinh 1</Text>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.result]}>
                                <Text style={styles.textResult}>C1</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>C2</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>C3</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>C4</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>C5</Text>
                            </View>
                        </View>
                       <View style={[styles.row]}>
                           <View style={[styles.rowItem]}>
                               <TextInput
                                   style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                               />
                           </View>
                           <View style={styles.rowItem}>
                               <TextInput
                                   style={[DefaultStyle.InputNumber, styles.textInput]}
                                   keyboardType='numeric'
                               />
                           </View>
                           <View style={styles.rowItem}>
                               <TextInput
                                   style={[DefaultStyle.InputNumber, styles.textInput]}
                                   keyboardType='numeric'
                               />
                           </View>
                           <View style={styles.rowItem}>
                               <TextInput
                                   style={[DefaultStyle.InputNumber, styles.textInput]}
                                   keyboardType='numeric'
                               />
                           </View>
                           <View style={styles.rowItem}>
                               <TextInput
                                   style={[DefaultStyle.InputNumber, styles.textInput]}
                                   keyboardType='numeric'
                               />
                           </View>
                       </View>
                        <View style={[styles.row]}>
                            <View style={[styles.rowItem]}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.rowItem]}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.rowItem]}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.rowItem]}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.result]}>
                                <Text style={styles.textResult}>100</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>100</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>100</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>100</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>1245.8</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.rowResult}>
                        <View style={[styles.row, {alignItems: 'center', justifyContent: 'center'}]}>
                            <Text style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold'}}>Trang Tinh 1</Text>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.result]}>
                                <Text style={styles.textResult}>C1</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>C2</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>C3</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>C4</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>C5</Text>
                            </View>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.rowItem]}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.rowItem]}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.rowItem]}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.rowItem]}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.rowItem]}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.result]}>
                                <Text style={styles.textResult}>100</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>100</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>100</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>100</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>1245.8</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.rowResult}>
                        <View style={[styles.row, {alignItems: 'center', justifyContent: 'center'}]}>
                            <Text style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold'}}>Trang Tinh 1</Text>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.result]}>
                                <Text style={styles.textResult}>C1</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>C2</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>C3</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>C4</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>C5</Text>
                            </View>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.rowItem]}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.rowItem]}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.rowItem]}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.rowItem]}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.rowItem]}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={styles.rowItem}>
                                <TextInput
                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={[styles.row]}>
                            <View style={[styles.result]}>
                                <Text style={styles.textResult}>100</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>100</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>100</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>100</Text>
                            </View>
                            <View style={[styles.result, {borderLeftWidth: 1, borderLeftColor: Color.White}]}>
                                <Text style={styles.textResult}>1245.8</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}