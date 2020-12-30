import React, { Component } from 'react';
import { View, Text } from 'react-native';
import IMCMsg from '../IMCMsg';

export default class IMCCalc extends Component {
    render() {
        return (
            <View>
                {/* Cálculo do IMC: IMC = peso/(altura*altura)*/}
                <Text>Seu IMC é: </Text>

                {/* Passar todos os dados para as propriedades aqui */}
                <IMCMsg />
            </View>
        )
    }
}
