import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import images from '../Listes/img_src';

export default function Details({ route, navigation }) {

    const { name, description } = route.params;
    
    const id_im = route.params.id;

    return (
      <View style={styles.container}>

        <View>
            <Image style={styles.img} source={images.elevesIm[id_im]} />
        </View>

        <View style={{flex:1}}>
            <Text style={styles.text} >{name}</Text>
            <Text>{description}</Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    img: {
        height: 250,
        width: 200,
    },
    text: {
        marginTop:7,
        marginBottom:3,

        fontSize: 17,
        fontWeight:'bold',
    },
});