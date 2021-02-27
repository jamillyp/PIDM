import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
    render(){
        return (
        <View style={Style.viewStyle}>

            <Text style={Style.textStyle}>{this.props.title}</Text>

        </View>);
    }
}

const Style = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width:0 , height: 2},
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
});