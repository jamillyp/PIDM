import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

export default function Informacoes({cidade, quantidade}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {cidade}: {quantidade} voto(s)<br />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 50,
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