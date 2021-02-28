import React, {Component} from 'react';
import { View, Text } from 'react-native';

import Card from './Card.jsx';
import CardItem from './CartItem';

export default class AlbumDetail extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <View>
                <Card>
                <CardItem>
                    <Text>
                        {this.props.album.title}
                    </Text>
                </CardItem>
                </Card>
            </View>
        );
    }
}9