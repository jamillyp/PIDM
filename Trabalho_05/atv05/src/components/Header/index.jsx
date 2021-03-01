import React, { Component } from 'react';
import { View, Text } from 'react-native';

import style from '../../style';

export default class Header extends Component{
    render(){
        return(
            <View style={style.viewContainer}>
                <Text style={style.textStyle}>{this.props.title}</Text>
            </View>
        )
    }
}