import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sobre(){
    return(
        <View style={estiloSobre.container}>
            <Text style={estiloSobre.titulo}>Sobre</Text>
            <Text style={estiloSobre.texto}>
                Essa aplicação atua como o trabalho número 4 da disciplina de Projeto de Interface para Dispositivos Móveis.
                Essa disciplina é ministrada pelo professor Jefferson Carvalho. O objetivo desse trabalho é colocar em prática
                os conceitos estudados até o momento na disciplina. A aplicação foi desenvolvida pela aluna Jamilly Pinheiro Lima, 
                com matrícula 390069, do curso de Design Digital, da Universidade Federal do Ceará, campus Quixadá.
            </Text>

        </View>
    );
}
const estiloSobre = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#41436A',
        paddingBottom: 100,
    },
    titulo: {
        fontSize: 30,
        color: '#F64668',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    texto: {
        width: 300,
        color: 'white',
        padding: 20,
        textAlign: 'center'
    }
});