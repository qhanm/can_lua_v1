import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Color, Font, DefaultStyle } from '../../utils/Constant';
import IconCustom from '../icons';
import { Button } from 'react-native-elements';
import { DrawerActions } from '@react-navigation/native';

class SideBarCustom extends React.Component{
    render() {
        return (
            <Grid>
                <Row size={12} style={styles.header}>
                    <View style={[styles.headerView]}>
                        <Text style={[styles.headerTextLeft, styles.headerText]}>CÂN LÚA</Text>
                        <TouchableOpacity
                            style={styles.headerTextRight}
                            onPress={() => { this.props.navigation.closeDrawer() }}
                        >
                            <IconCustom.Close />
                        </TouchableOpacity>
                    </View>
                </Row>
                <Row size={76} style={styles.body}>
                    <View style={styles.container}>
                        <View>
                            <View style={styles.bodyHeader}>
                                <Text style={styles.textHeaderBold}>Quy cách mã cân</Text>
                                <View style={styles.pickerView}>
                                    <Picker
                                        style={styles.picker}
                                        selectedValue={() => {console.log('call')}}
                                        onValueChange={() => {console.log('call')}}
                                    >
                                        <Picker.Item label="Khối lượng có phần lẽ" value="java" />
                                        <Picker.Item label="Khối lượng chẵng" value="js" />
                                    </Picker>
                                </View>
                            </View>
                            <View>
                                <Text style={{color: Color.Silver, marginTop: 5, paddingRight: 5, paddingLeft: 5}}>"Khối lượng chẵn" (VD: 50kg, 51kg, 52kg, ...) không quá 99kg. "Khối lượng có phần lẽ" (VD: 50.2kg, 51.4kg, ...) không quá 99,9kg. (Chỉ có hiệu lực kể từ khi thực hiện thay đổi trở về sau)</Text>
                            </View>
                            <View>
                                <Text style={styles.textHeaderBold}>Trừ bì bao</Text>
                                <TextInput
                                    placeholder='0'
                                    style={DefaultStyle.InputNumber}
                                />
                            </View>
                            <View>
                                <Text style={{color: Color.Silver, marginTop: 5, paddingRight: 5, paddingLeft: 5}}>
                                    Số lượng bao trên 1kg, mặt đinh là 8 cái/1kg. Nhập vào 0 nếu không muốn trừ bì bao. (Chỉ có hiệu lực kể từ khi thực hiện thay đổi trở về sau).
                                </Text>
                            </View>
                            <View style={{marginTop: 15}}>
                                <Button
                                    title="Kích hoạt"
                                />
                            </View>
                        </View>
                    </View>
                </Row>
                <Row size={12} style={[styles.body, styles.rowVersion]}>
                    <View style={{width: '100%'}}>
                        <Text style={styles.textVersion}>Phiên bản v1.0.0</Text>
                    </View>
                </Row>
            </Grid>
        )
    }
}

const styles = StyleSheet.create({
    textVersion: {
        textAlign: 'center',
        fontFamily: Font
    },
    rowVersion: {
        borderTopColor: Color.Silver,
        borderTopWidth: 1,
        backgroundColor: Color.Sliver1,
        justifyContent: 'center',
    },
    picker: {
        height: 32,
        width: 230,
        color: Color.Red,
    },
    pickerView: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: Color.Silver,
        borderRadius: 5,
    },
    body: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    },
    bodyHeader: {
        padding: 10,
    },
    container: {
        width: '90%',
    },
    header: {
        borderBottomColor: Color.Red,
        borderBottomWidth: 1,
    },
    headerView: {
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: Font,
    },
    headerTextLeft: {
        marginLeft: 20,
    },
    headerTextRight: {
        marginRight: 15,
        fontWeight: 'bold',
    },
    textHeaderBold: {
        fontFamily: Font,
        fontWeight: 'bold',
        marginBottom: 3,
        marginTop: 5,
    }
})

export default SideBarCustom;
