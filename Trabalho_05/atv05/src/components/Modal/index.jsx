import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

import CardItem from '../CardItem';

export default class Modal extends Component{
    render(){
        return(
            <View style={style.container}>
                <CardItem>
                    <Text style={style.textTittle}>
                        {this.props.route.params.album}
                    </Text>
                </CardItem>
                <CardItem>
                    <Text>
                        {this.props.route.params.lista}
                    </Text>
                </CardItem>
                <CardItem>
                    <TouchableHighlight style={style.buttonStyle} onPress={()=>{this.props.navigation.navigate('Home')}}>
                        <Text style={style.textButton}>
                            Voltar
                        </Text>
                    </TouchableHighlight>
                </CardItem>
            </View>
        )
    }
}
const style = StyleSheet.create({ 
    container:{ 
        width: 240,
        margin: 'auto'
    },
    textTittle:{
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center',
        color: '#000'
    },
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#c0c0c0',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        margin: 5,
        elevation: 3,
        padding: 5
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        color: '#000'
    },
})