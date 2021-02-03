import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default class Perfil extends Component {
    render() {
        return (
            <View style={estiloPerfil.container}>
                <Image style = {{width: 200, height: 180, margin: 10}} source = {{uri: 'https://s2.glbimg.com/TcgDMMzRbPjtUM3Mm_lqDRCqF8g=/620x620/smart/e.glbimg.com/og/ed/f/original/2019/11/01/lilyandchloeofficial_73295075_454717811833787_7405708810502304129_n.jpg'}}></Image>

                <Text style={estiloPerfil.text}>Nome: {this.props.route.params.nome}</Text>
                <Text style={estiloPerfil.text}>Idade: {this.props.route.params.idade}</Text>
                <Text style={estiloPerfil.text}>Email: {this.props.route.params.email}</Text>

                <TouchableHighlight onPress={()=> this.props.navigation.navigate('home')} style={estiloPerfil.botao}>
                    <Text style={estiloPerfil.textBotao}>
                        HOME 
                    <Feather
                    name="arrow-down-left"
                    size={24}
                    color='white'
                    />
                    </Text>
                    
                </TouchableHighlight>

            </View>
        );
    }
}

const estiloPerfil = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#41436A',
        paddingBottom: 50
    },
    text: {
        height: 45,
        width: 300,
        paddingLeft: 20,
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center'
    },
    botao: {
        alignItems: 'center',
        width: 100,
        height: 45,
        backgroundColor: '#F64668',
    },
    textBotao: {
        marginLeft: 7,
        padding: 8,
        color: 'white'
    }
});

