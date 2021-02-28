import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { style } from '../../style';

export default class Header extends Component {
    render(){
        return (
        <View style={style.header}>

            <Text style={style.header}>{this.props.title}</Text>

        </View>);
    }
}
