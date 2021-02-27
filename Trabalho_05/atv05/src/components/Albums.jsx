import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Albums extends Component {
    construct(props){
        super(props);
        this.state = {
            albums:[]
        };
    }

    componentDidMount(){
        return fetch('api')
        .then((response)=>response.json())
        .then(
          (responseJson) => {
            this.setState(
                {albums : responseJson})
        }
        );
    }

    render(){
        return (
        <View style={Style.viewStyle}>

            <Text style={Style.textStyle}>Album List</Text>

        </View>);
    }
}

const Style = StyleSheet.create({
    viewStyle: {
        
    },
    textStyle: {
        
    }
});