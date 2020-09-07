import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, SafeAreaView, ToastAndroid  } from 'react-native';
import GroupClient from "./GroupClient";
import {DefaultStyle} from "../../utils/Constant";

class ListClientComponent extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            heightScrollView: 10,
        }
    }
    componentDidMount(): void {
        //console.log(Dimensions.get('window').height);
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
                            <View style={[styles.row, DefaultStyle.Card]}>
                                <GroupClient navigation={this.props.navigation}/>
                            </View>
                            <View style={[styles.row, DefaultStyle.Card]}>
                                <GroupClient navigation={this.props.navigation}/>
                            </View>
                            <View style={[styles.row, DefaultStyle.Card]}>
                                <GroupClient navigation={this.props.navigation}/>
                            </View>
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
