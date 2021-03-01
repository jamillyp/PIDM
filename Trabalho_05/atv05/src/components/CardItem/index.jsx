import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class CardItem extends Component{
    render(){
        return(
            <View style={style.containerStyle}>
                {this.props.children}
            </View>
        )
    }
}
const style = StyleSheet.create({
    containerStyle:{
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position: 'relative',
    }
})