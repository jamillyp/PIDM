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
        textAlign: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 30,
        padding: 20,
        color: 'pink',
        fontWeight: 'bold'
    },
    texto: {
    }
});