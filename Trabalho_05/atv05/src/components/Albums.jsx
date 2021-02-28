import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AlbumDetail from './AlbumDetail.jsx'

export default class Albums extends Component {
    construct(props){
        super(props);
        this.state = {
            albums:[]
        };
    }

    componentDidMount(){
        return fetch('https://github.com/san650/ten/blob/master/apps/music/api/albums.json')
        .then(
            (response)=>response.json()
        )        
        .then(
          (responseJson) => {
            this.setState(
                {albums:responseJson})
            }
        );
    }
    renderAlbums(){
        return this.state.albums.map(album=><Text key={album.title}>{album.title}</Text>);
    }

    render(){
        return (
        <View>

            {this.renderAlbums()}

        </View>
        );
    }
}

const Style = StyleSheet.create({
    viewStyle: {
        
    },
    textStyle: {
        
    }
});

