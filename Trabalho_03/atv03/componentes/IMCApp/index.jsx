import React, { Component } from 'react';
import {View, Text} from 'react-native';
import IMCCalc from '../IMCCalc';

export default class IMCApp extends Component {
    render() {
        return (
            <View>
                <Text>IMC: </Text>
                {/* TextImput para pegar o peso e a altura do usuário e um botão para calcular */}

                <IMCCalc />
            </View>
        )
    }
}
