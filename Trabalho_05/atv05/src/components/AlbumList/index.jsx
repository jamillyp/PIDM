import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import AlbumDetail from '../AlbumDetail';
import Header from '../Header';

export default class AlbumList extends Component{
    constructor(props){
        super(props)
        this.state = {
            albums : []
        }
    }
    componentDidMount(){
        fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json')
        .then((response) => response.json())
        .then((responsejson) => {
            this.setState({albums: responsejson.albums})
        })
    }
    render(){
        let cards = []
        this.state.albums.map((item, index) => {cards.push(<AlbumDetail key={index} title={item.name} artista={item.artist} imagem={item.image} id={item.id} navigation={this.props.navigation}></AlbumDetail>)})
        return(
            <View style={style.containerStyle}>
                <Header title='Albums'></Header>
                {cards}
            </View>
        )
    }
}
const style = StyleSheet.create({
    containerStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})