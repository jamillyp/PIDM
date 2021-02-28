import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CardItem extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <View style={Style.containerStyle}>
                {this.props.children}
            </View>
        );
    }
}

const Style= StyleSheet.create({
    containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    position: 'relative',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    }
});