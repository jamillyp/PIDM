import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Cidade({cidade, setVotosCidade}){
    const [voto, setVotos] = useState(0);

    const handleVotosCidade = useCallback(() =>{
      setVotos(voto + 1);
      setVotosCidade(voto + 1);
    },[voto]);

    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleVotosCidade} >
          <Text style={styles.textButton}>{cidade}</Text>
        </TouchableOpacity>
      </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 300,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row',
        marginBottom: 15,
    },
    text:{
        flex: 3,
        textAlign: 'center'
    },
    button:{
        height: 40,
        flex: 1,
        backgroundColor: '#bdf2d8',
        alignItems:'center',
        justifyContent: 'center',
    },  
    textButton:{
        fontWeight: 'bold',
        fontSize: 13
    }  
});
  

