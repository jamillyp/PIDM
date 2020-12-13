import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet } from 'react-native';

export default function Informacoes({resultado}) {
    const [maisVotos, setMaisVotos] = useState([]);
    const [menosVotos, setMenosVotos] = useState([]);

    useEffect(()=>{
        const valores = resultado.map(item =>{
            return item.votos;
        });
        const max = valores.reduce((a,b) =>{
            return Math.max(a,b);
        });
        const min = valores.reduce((a,b) =>{
            return Math.min(a,b);
        });
        
        let mais = [];
        let menos = [];

        resultado.find((item)=>{
            if(item.votos === max && max != 0){
                mais.push(item.cidade);
            }
        });
        
        resultado.find((item)=>{
            if(item.votos === min && min != 0 && min != max){
                menos.push(item.cidade);
            }
    });
    setMaisVotos(mais);
    setMenosVotos(menos);
    
    },[resultado]);

    return (
    <View style={styles.container}>
      <Text style={styles.text}>
          MAIS VOTADA(S): {maisVotos.join(', ')}<br /> 
          MENOS VOTADA(S): {menosVotos.join(', ')}<br />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 70,
    width: 300,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    marginBottom: 15,
  },
  text: {
    color: 'white',
    flex: 3,
    marginLeft: 20
  }
})