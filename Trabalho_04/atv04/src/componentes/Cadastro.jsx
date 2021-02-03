import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableHighlight } from 'react-native';

export default class Cadastro extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: null,
            idade: null,
            email: null,
        }
    }
    render(){
        return (
        <View style={estiloCadastro.container}>                
            
            <TextInput
            style={estiloCadastro.estiloText}
            placeholder='Digite seu nome'
            onChangeText={(nome) => this.setState({nome: nome})}
            />
            <TextInput
            style={estiloCadastro.estiloText}
            placeholder='Digite sua idade'
            onChangeText={(idade) => this.setState({idade: idade})}
            />
            <TextInput
            style={estiloCadastro.estiloText}
            placeholder='Digite seu E-mail'
            onChangeText={(email) => this.setState({email: email})}
            />
            <TouchableHighlight onPress={() => 
                {this.props.navigation.navigate('perfil', 
                {nome: this.state.nome, idade: this.state.idade, email: this.state.email})}}
            >
                <View style={estiloCadastro.button}>
                    <Text style={estiloCadastro.buttonText}> ENVIAR </Text>
                </View>
            </TouchableHighlight>
        </View>

        );
    }
}
    

const estiloCadastro = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#41436A'
    },
    text: {
        fontSize: 30,
        padding: 20,
        color: 'pink',
        fontWeight: 'bold'
    },
    estiloText: {
        height: 45,
        width: 300,
        borderColor: "white",
        borderWidth: 2,
        paddingLeft: 20,
        marginBottom: 20,
        backgroundColor: 'white'
    },
    button:{
        alignItems: 'center',
        width: 150,
        height: 45,
        backgroundColor: '#F64668',
    },
    buttonText:{
        padding: 13,
        color: 'white'
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },

});