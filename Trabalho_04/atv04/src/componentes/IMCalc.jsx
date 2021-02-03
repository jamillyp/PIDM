import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class IMCalc extends Component {
    constructor(props){
        super(props);
        this.state = {
            altura: null, 
            peso: null,
        };
    };

    render() {
        
        return (
            <View style={estiloIMC.container}>
            <Text style={estiloIMC.text}>Calcule seu IMC</Text>
            
            <TextInput
            onChangeText={(peso) => {this.setState({peso})}}
            placeholder="Digite seu peso (kg)"
            keyboardType="numeric"
            style={estiloIMC.estiloText}
            />

            <TextInput
            onChangeText={(altura) => {this.setState({altura})}}
            placeholder="Digite sua altura (cm)"

            style={estiloIMC.estiloText}
            />

            <TouchableOpacity
            onPress={() => {this.props.navigation.navigate('resultado', {peso: this.state.peso, altura: this.state.altura})}}
            style={estiloIMC.button}
            >
            <Text style={estiloIMC.buttonText}>Calcular</Text>
            </TouchableOpacity>

        </View>    
        
        );
    }
}

const estiloIMC = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#41436A'
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
    text: {
        fontSize: 30,
        padding: 20,
        color: '#F64668',
        fontWeight: 'bold'
    }

});

