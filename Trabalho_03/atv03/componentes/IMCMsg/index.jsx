import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class IMCMsg extends Component {
    constructor(props){
        super(props);
        this.state = {imc: null};
    }
    render() {
        if(this.props.imc<17) return (<Text style={styles.textVermelho}>Você está muito abaixo do peso!</Text>);
        if(this.props.imc>=17 && this.props.imc<=18.49) return (<Text style={styles.textVermelho}>Você está abaixo do peso!</Text>);
        if(this.props.imc>=18.5 && this.props.imc<=24.99) return (<Text style={styles.textAzul}>Você está com peso normal!</Text>);
        if(this.props.imc>=25 && this.props.imc<=29.99) return (<Text style={styles.textVermelho}>Você está acima do peso!</Text>);
        if(this.props.imc>=30 && this.props.imc<=34.99) return (<Text style={styles.textVermelho}>Você está com Obesidade I!</Text>);
        if(this.props.imc>=35 && this.props.imc<=39.99) return (<Text style={styles.textVermelho}>Você está com Obesidade II (severa)!</Text>);
        if(this.props.imc>40) return (<Text style={styles.textVermelho}>Você está com Obesidade III (mórbida)!</Text>);
        

        return (
            <View>
                <Text></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textVermelho: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textAzul: {
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold'
    },
})