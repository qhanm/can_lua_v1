import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, SafeAreaView, ToastAndroid  } from 'react-native';
import GroupClient from "./GroupClient";
import {DefaultStyle} from "../../utils/Constant";
import { db } from '../../databases/Setup';
import SQLite from "react-native-sqlite-2";

class ListClientComponent extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            heightScrollView: 10,
            clientGroup : [],
            test: "",
        }
    }
    componentDidMount() {
        let that = this;
        this.getClientGroup(db).then(function (data){
            //console.log(data, 'did mount')
            let result = [];
            for (let i = 0; i < data.rows.length; ++i) {
                result.push(data.rows.item(i));
            }

            that.setState({clientGroup: result})
        })


    }

    getClientGroup(db) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql('select * from client_group', [], (tx, results) => {
                    resolve(results);
                });
            });
        });
    }

    getHeightView = (event) => {
        let {x, y, width, height} = event.nativeEvent.layout;
        let heightWindow = Dimensions.get('window').height;

        if(height > heightWindow){
            height = height - heightWindow;
        }

        this.setState({heightScrollView: height});
    }

    __renderAlert = () => {
        ToastAndroid.showWithGravity('Thêm nhóm mới thành công',  ToastAndroid.LONG,ToastAndroid.BOTTOM)
    }

    render() {
        return (
            <View>
                <SafeAreaView>
                    <ScrollView contentContainerStyle={{paddingBottom: 200}}>
                        <View style={styles.container} onLayout={(event) => { this.getHeightView(event) }}>
                            { this.state.clientGroup.map((group, key) => {

                                return (
                                    <View style={[styles.row, DefaultStyle.Card]} key={key}>
                                        <GroupClient navigation={this.props.navigation} group={group}/>
                                    </View>
                                )
                            }) }

                        </View>

                    </ScrollView>

                </SafeAreaView>
                { this.__renderAlert() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    row: {
        width: '95%',
    }
});

export default ListClientComponent;
