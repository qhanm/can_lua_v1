import React from 'react';
import {Text, View, StyleSheet, TextInput, SafeAreaView, ScrollView} from "react-native";
import {Color, Font, DefaultStyle} from "../../utils/Constant";
import Close from "../icons/Close";
import {Button} from "react-native-elements";
import SheetsComponent from "./SheetsComponent";

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
        marginTop: 10,

    },
    item: {
        flexDirection: 'row',
        borderColor: Color.Silver,
        borderWidth: 1,
        marginBottom: 10,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftRow: {
        width: '30%',
        backgroundColor: Color.Sliver2,
        fontSize: 17,
        borderRightWidth: 1,
        borderRightColor: Color.Silver,
    },
    rightRow: {
        width: '70%',
        backgroundColor: Color.Sliver2,
        borderRightColor: Color.Silver,
        borderRightWidth: 1,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        fontWeight: 'bold',

    },
    textInput: {
        borderRadius: 0,
        borderColor: 0,
        color: Color.Black,
        backgroundColor: Color.Sliver3,
        fontSize: 17,
        fontFamily: Font,
        textAlign: 'right',
        fontWeight: 'bold',
    },
    leftItem: {
        borderRightWidth: 1,
        borderRightColor: Color.Silver,
        backgroundColor: Color.Sliver2,
    },
    centerItem: {
        fontWeight: 'bold',
    },
    rightItem: {
        backgroundColor: Color.Sliver2,
        borderRightColor: Color.Silver,
        borderRightWidth: 1,
    },
    general: {
        paddingBottom: 5,
        paddingTop: 5,
        fontSize: 17,
        fontFamily: Font,
        textAlign: 'center',
    }

});

export default class CalculatorComponent extends React.Component
{
    render() {
        return (
            <SafeAreaView>
                <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
                    <View>
                        <SheetsComponent />
                        <View style={styles.container}>
                            <View style={styles.rowResult}>
                                <View style={styles.rowHeader}>
                                    <Text style={{fontSize: 22, color: Color.Red, fontWeight: 'bold'}}>Kết Quả</Text>
                                </View>
                                <View style={styles.subRow}>
                                    <View style={styles.rowItem}>
                                        <View style={[styles.item]}>
                                            <Text style={[styles.leftRow, styles.general]}>Ngày cân</Text>
                                            <Text style={[styles.rightRow, styles.general]}>
                                                8h-19' - 26-05-2020
                                            </Text>
                                        </View>
                                        <View style={[styles.item]}>
                                            <Text style={[styles.leftRow, styles.general]}>Họ và tên</Text>
                                            <Text style={[styles.rightRow, styles.general]}>
                                                Quách Hoài Nam
                                            </Text>
                                        </View>
                                        <View style={[styles.item]}>
                                            <Text style={[styles.leftRow, styles.general]}>Tên giống</Text>
                                            <Text style={[styles.rightRow, styles.general]}>
                                                Jasmin
                                            </Text>
                                        </View>

                                        <View>
                                            <Text>{"\n"}</Text>
                                        </View>

                                        {/*Tong KL*/}
                                        <View style={[styles.item]}>
                                            <View style={{width: '30%'}}>
                                                <Text style={[styles.general, styles.leftItem, {color: Color.Red}]}>Tổng KL</Text>
                                            </View>
                                            <View style={{width: '50%'}}>
                                                <TextInput
                                                    style={[DefaultStyle.InputNumber, styles.textInput]}
                                                    placeholder='0'
                                                    keyboardType='numeric'
                                                />
                                            </View>
                                            <View style={{width: '20%'}}>
                                                <Text style={[styles.general, styles.rightItem]}>
                                                    Kg
                                                </Text>
                                            </View>
                                        </View>

                                        {/*SL Bao*/}
                                        <View style={[styles.item]}>
                                            <View style={{width: '30%'}}>
                                                <Text style={[styles.general, styles.leftItem, {}]}>SL Bao</Text>
                                            </View>
                                            <View style={{width: '50%'}}>
                                                <TextInput
                                                    style={[DefaultStyle.InputNumber, styles.textInput, {color: Color.Red}]}
                                                    placeholder='0'
                                                    keyboardType='numeric'
                                                    placeholderTextColor={Color.Red}
                                                />
                                            </View>
                                            <View style={{width: '20%'}}>
                                                <Text style={[styles.general, styles.rightItem]}>
                                                    Cái
                                                </Text>
                                            </View>
                                        </View>

                                        {/*KL Bao Bi*/}
                                        <View style={[styles.item]}>
                                            <View style={{width: '30%'}}>
                                                <Text style={[styles.general, styles.leftItem, {}]}>KL Bao Bì</Text>
                                            </View>
                                            <View style={{width: '50%'}}>
                                                <TextInput
                                                    style={[DefaultStyle.InputNumber, styles.textInput, {color: Color.Red}]}
                                                    placeholder='0'
                                                    keyboardType='numeric'
                                                />
                                            </View>
                                            <View style={{width: '20%'}}>
                                                <Text style={[styles.general, styles.rightItem]}>
                                                    Kg
                                                </Text>
                                            </View>
                                        </View>

                                        {/*KL Con Lai*/}
                                        <View style={[styles.item]}>
                                            <View style={{width: '30%'}}>
                                                <Text style={[styles.general, styles.leftItem, {}]}>KL Còn Lại</Text>
                                            </View>
                                            <View style={{width: '50%'}}>
                                                <TextInput
                                                    style={[DefaultStyle.InputNumber, styles.textInput, {backgroundColor: Color.Yellow}]}
                                                    placeholder='0'
                                                    keyboardType='numeric'
                                                    editable={false}
                                                />
                                            </View>
                                            <View style={{width: '20%'}}>
                                                <Text style={[styles.general, styles.rightItem]}>
                                                    Kg
                                                </Text>
                                            </View>
                                        </View>

                                        {/*Gia Mua*/}
                                        <View style={[styles.item]}>
                                            <View style={{width: '30%'}}>
                                                <Text style={[styles.general, styles.leftItem, {color: Color.Blue}]}>Giá Mua</Text>
                                            </View>
                                            <View style={{width: '50%'}}>
                                                <TextInput
                                                    style={[DefaultStyle.InputNumber, styles.textInput, {}]}
                                                    placeholder='0'
                                                    keyboardType='numeric'
                                                    placeholderTextColor={Color.Blue}
                                                />
                                            </View>
                                            <View style={{width: '20%'}}>
                                                <Text style={[styles.general, styles.rightItem]}>
                                                    vnđ
                                                </Text>
                                            </View>
                                        </View>

                                        {/*Thanh Tien*/}
                                        <View style={[styles.item]}>
                                            <View style={{width: '30%'}}>
                                                <Text style={[styles.general, styles.leftItem, {color: Color.Red}]}>Thành Tiền</Text>
                                            </View>
                                            <View style={{width: '50%'}}>
                                                <TextInput
                                                    style={[DefaultStyle.InputNumber, styles.textInput, {backgroundColor: Color.Yellow}]}
                                                    placeholder='0'
                                                    keyboardType='numeric'
                                                    placeholderTextColor={Color.Red}
                                                    editable={false}
                                                />
                                            </View>
                                            <View style={{width: '20%'}}>
                                                <Text style={[styles.general, styles.rightItem]}>
                                                    vnđ
                                                </Text>
                                            </View>
                                        </View>

                                        <View>
                                            <Button title='Mở Khóa' />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }
}