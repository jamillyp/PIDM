import React, { Component } from 'react';
import { View, Text } from 'react-native';

import firestore from '@react-native-firebase/firestore';

export default class Firebase extends Component{

    constructor(props){
        super(props)
        this.getUser()
        this.state = {
            name : ''
        }
    }

    getUser = async () => {
        const usersDocument = await firestore().collection('students')
        .doc('zS4s295CpmSqsJpTMWu9').get('')
        //console.log(usersDocument._data.name)
        this.setState({
            name : usersDocument._data.name
        })
    }
  render(){
    return(
      <View style={{flex: 1, justifyContent='center', alignItems: 'center'}}>
        <Text style={{fontSize: 25}}>
          {this.state.name}
        </Text>
      </View>
    )
  }
}
