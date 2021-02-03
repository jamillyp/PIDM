import React, {Component} from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default class Resultado extends Component{
    render(){
        let peso = this.props.route.params.peso;
        let altura = this.props.route.params.altura;
        let imc = peso / (altura * altura);
        let resultado = "";

        if(imc < 17 ){
            resultado = "Muito abaixo do peso"
        }else if(imc >= 17 && imc <= 18.49){
            resultado = "Abaixo do peso"
        }else if(imc >= 18.5 && imc <= 24.99){
            resultado = "Peso normal"
        }else if(imc >= 25 && imc <=29.99){
            resultado = "Acima do peso"
        }else if(imc >=30 && imc <= 34.99){
            resultado = "Obesidade I"
        }else if(imc >= 35 && imc <= 39.99){
            resultado = "Obesidade II (severa)"
        }else{
            resultado = "Obesidade III (mórbida)"
        }
        return(
            <View style = {estiloResultado.container}>
                <Text style = {estiloResultado.text}>
                   Olá, o resultado do cálculo do seu IMC é: {imc}
                </Text>
                <Text style = {estiloResultado.text}>
                    E você está na situação: {resultado}
                </Text>

                <TouchableHighlight onPress={()=> this.props.navigation.navigate('home')} style={estiloResultado.botao}>
                    <Text style = {estiloResultado.textBotao}>
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

const estiloResultado = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#41436A'
    },
    text: {
        height: 45,
        width: 300,
        paddingLeft: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'white'
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