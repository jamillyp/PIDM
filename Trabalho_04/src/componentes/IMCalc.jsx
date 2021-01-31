import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class IMCalc extends Component {
    constructor(props){
        super(props);
        this.state = {
            altura: null, 
            peso: null,
        };
        this.calcularImc = this.calcularImc.bind(this)
    };

    calcularImc = ()=>{
        const imc = this.state.peso/(this.state.altura*this.state.altura)
        if(imc<17) return (<Text>Você está muito abaixo do peso!</Text>);
        if(imc>=17 && imc<=18.49) return (<Text>Você está abaixo do peso!</Text>);
        if(imc>=18.5 && imc<=24.99) return (<Text>Você está com peso normal!</Text>);
        if(imc>=25 && imc<=29.99) return (<Text>Você está acima do peso!</Text>);
        if(imc>=30 && imc<=34.99) return (<Text>Você está com Obesidade I!</Text>);
        if(imc>=35 && imc<=39.99) return (<Text>Você está com Obesidade II (severa)!</Text>);
        if(imc>40) return (<Text>Você está com Obesidade III (mórbida)!</Text>);
    }

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
            onPress={this.calcularImc}
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
        marginTop: 100,
    },
    estiloText: {
        height: 45,
        width: 300,
        borderColor: "pink",
        borderWidth: 2,
        paddingLeft: 20,
        marginBottom: 20 
    },
    button:{
        alignItems: 'center',
        width: 150,
        height: 45,
        backgroundColor: 'pink',
    },
    buttonText:{
        padding: 13,
        color: 'white'
    },
    text: {
        fontSize: 30,
        padding: 20,
        color: 'pink',
        fontWeight: 'bold'
    }

});

