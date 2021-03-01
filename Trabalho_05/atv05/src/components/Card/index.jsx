import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Card extends Component{
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
        width: 240,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        elevation: 1,
    }
})

