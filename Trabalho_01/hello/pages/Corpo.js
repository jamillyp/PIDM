import React,{Component} from 'react';
import { Image, View } from 'react-native';
import milly from '../assets/jamilly.jpeg';


export default class Corpo extends Component {

    render() {
        return (
            <View>
                <Image source={milly} style={{width:193, height:193}} />
            </View>
        );
    }
}