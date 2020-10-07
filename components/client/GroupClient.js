import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Color, DefaultStyle, Font, PageConstant} from "../../utils/Constant";
import { Icon } from 'react-native-elements'
import {SessionContext} from "../../context/SessionProvider";
import { db } from '../../databases/Setup';

const styles = StyleSheet.create({
    container: {},
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 2,
        borderBottomWidth: 1,
        borderBottomColor: Color.Red,
    },
    textHeader: {
        fontFamily: Font,
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 3,
    },
    headerBase: {
        color: Color.Blue
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        //justifyContent: 'space-around',
    },
    iconDelete: {
        backgroundColor: Color.Red,
        textAlign: 'left',
        padding: 5,
    },
    rowRightContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

class GroupClient extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            widthViewClientRight: 0,
            widthIconDelete: 0,
            clients: []
        }
    }

    componentDidMount() {
        let that = this;
        this.getClient(db).then((result) => {

            let _return = [];

            for (let i = 0; i < result.rows.length; i++)
            {
                _return.push(result.rows.item(i));
            }

            this.setState({clients: _return});
        })
    }

    getClient(db) {
        const { group } = this.props;
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql('select * from client where id_client_group = "'+ group.id +'"', [], (tx, results) => {
                    resolve(results);
                });
            });
        });
    }

    getHeightView = (event) => {
        let {x, y, width, height} = event.nativeEvent.layout;
        this.setState({widthViewClientRight: (width - this.state.widthIconDelete)});
    }

    getWidthIconDelete = (event) => {
        let {x, y, width, height} = event.nativeEvent.layout;
        this.setState({widthIconDelete: width});
    }

    __onPressClient = (sessionContext, navigation) => {
        sessionContext.setTextHeader('Nhom: Quach Hoai Nam');
        sessionContext.setScreenName(PageConstant.CustomerScreen)
        navigation.navigate(PageConstant.CustomerScreen)
    }

    render() {
        const { group } = this.props;
        console.log(group);
        return (
            <SessionContext.Consumer>
                {
                    sessionContext =>
                        <View style={styles.container}>
                            <View style={styles.header}>
                                <Icon name='today' color={Color.Blue}/>
                                <Text style={[styles.textHeader, styles.headerBase]}>{ group.date }</Text>
                            </View>
                            <View>
                                {
                                    this.state.clients.map((client, key) => {
                                        return (
                                            <View style={[DefaultStyle.Card, styles.row]} onLayout={(event) => {this.getHeightView(event)}} key={key}>
                                                <View onLayout={(event) => { this.getWidthIconDelete(event) }}>
                                                    <Icon name='delete' color={Color.White} style={styles.iconDelete}/>
                                                </View>
                                                <TouchableOpacity
                                                    onPress={() => { this.__onPressClient(sessionContext, this.props.navigation) }}
                                                >
                                                    <View style={[styles.rowRightContent, {width: this.state.widthViewClientRight}]}>
                                                        <Text style={{marginLeft: 10, fontFamily: Font}}>{ client.name }</Text>
                                                        <Text style={{marginRight: 8}}>
                                                            <Icon
                                                                name='chevron-right'
                                                                type='font-awesome'
                                                                color={Color.Red}

                                                                onPress={() => console.log('hello')} />
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })
                                }



                            </View>
                        </View>
                }
            </SessionContext.Consumer>
        )
    }
}


export default GroupClient;
