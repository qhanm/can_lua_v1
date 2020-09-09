import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {Color, DefaultStyle, Font, PageConstant} from "../../utils/Constant";
import {Icon} from "react-native-elements";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    column: {
        flexDirection: 'column',
        padding: 6,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {

    },
    text: {
        fontWeight: 'bold',
        fontFamily: Font,
    },
    iconDelete: {
        backgroundColor: Color.Red,
        textAlign: 'left',
        padding: 3,
    },
    borderRow: {
        borderBottomColor: Color.Silver,
        borderBottomWidth: 1
    }
});

export default class CustomerComponent extends Component
{
    render() {

        const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <View style={[DefaultStyle.Card, {width: '95%'}]}>
                    <View
                        style={[styles.column, {borderBottomColor: Color.Red,borderBottomWidth: 1}]}
                    >
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate(PageConstant.CalculatorScreen) }}>
                                <Text style={[styles.text, {fontSize: 18, color: Color.Navy}]}>Nam - Jas</Text>
                            </TouchableOpacity>
                            <Icon name='delete' color={Color.White} style={styles.iconDelete}/>
                        </View>
                    </View>
                    <View style={[styles.column, styles.borderRow]}>
                        <View style={[styles.row, {justifyContent: 'flex-start', alignItems: 'center'}]}>
                            <Icon name='today' color={Color.Silver}/>
                            <Text style={[styles.text ,{marginLeft: 10, fontSize: 15}]}>20-10-2020</Text>
                        </View>
                    </View>
                    <View style={[styles.column, styles.borderRow]}>
                        <View style={[styles.row, {justifyContent: 'flex-start', alignItems: 'center'}]}>
                            <Icon name='calculator'
                                  type='font-awesome'
                                  color={Color.Blue}
                            />
                            <Text style={[styles.text, {marginLeft: 10, fontSize: 15}]}>
                                KL: 0 Kg x 0 VND
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.column, styles.borderRow]}>
                        <View style={[styles.row, {justifyContent: 'flex-start', alignItems: 'center'}]}>
                            <Icon
                                name='money'
                                type='font-awesome'
                                color={Color.Red}
                            />
                            <Text style={[styles.text, {marginLeft: 10, fontSize: 15}]}>
                                TT: 0 VND
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}