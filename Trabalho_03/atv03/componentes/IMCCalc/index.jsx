import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import IMCMsg from '../IMCMsg';

export default class IMCCalc extends Component {
    constructor(props){
        super(props);
    };
    
    render() {
        const imc = this.props.peso/(this.props.altura*this.props.altura);

        if(this.props.peso == null || this.props.altura == null) return null;
        if(this.props.peso <= 0 || this.props.altura <=0) return(<Text>o valor precisa ser maior que 0</Text>);
        
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Seu IMC é: {imc}
                </Text>

                <IMCMsg imc={imc} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
  });
