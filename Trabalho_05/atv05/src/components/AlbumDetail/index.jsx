import React, { Component } from 'react';
import { Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Card from '../Card';
import CardItem from '..CardItem';

export default class AlbumDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            musics : []
        }
    }
    componentDidMount(){
        fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums/' + this.props.id + '/tracks.json')
        .then((response) => response.json())
        .then((responsejson) => {
            this.setState({musics: responsejson.tracks})
        })
    }
    render(){
        let lista = []
        this.state.musics.map((item, index) => {lista.push(<Text key={index}>{item.title}</Text>)})
        return(
            <Card>
                <CardItem>
                        <Text style={style.textTittle}>{this.props.title}</Text>
                        <Text style={style.textArtist}>{this.props.artista}</Text>
                </CardItem>

                <CardItem>
                    <Image style = {style.styleImage} source={'https://raw.githubusercontent.com/san650/ten/master/apps/music' + this.props.imagem}></Image>
                </CardItem>
                <CardItem>
                    <TouchableHighlight style={style.buttonStyle}onPress={()=>{this.props.navigation.navigate('Modal', {album: this.props.title, lista: lista})}}>
                        <Text style={style.textButton}>
                            Ver músicas
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={style.buttonStyle}>
                        <Text style={style.textButton}>
                            Comprar
                        </Text>
                    </TouchableHighlight>
                </CardItem>
            </Card>
        )
    }
}
const style = StyleSheet.create({
    textTittle:{
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center',
        color: '#000'
    },
    textArtist:{
        fontSize: 10,
        color:'grey',
        textTransform: 'uppercase',
        textAlign: 'right',
        margin: 5
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        color: '#000'
    },
    styleImage:{
        height: 220,
        width: 220,
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 5,
        marginTop: 5
    },
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#c0c0c0',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        margin: 5,
        elevation: 3,
        padding: 5
    }
})