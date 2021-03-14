import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class List_item extends React.Component {
    render() {

        const eleve = this.props.eleve

        return (
            <View name='box' style={styles.box}>
                <Image style={styles.image} source={require('../Listes/TestPic.jpg')} />
                <Text name='nom' style={styles.text} numberOfLines={1}>{eleve.name}</Text>
                <Text name='description' style={styles.text2} numberOfLines={2} >{eleve.description}</Text>
            </View>
        );
    }
}

export default List_item;

const styles = StyleSheet.create({
    box: {
        flexDirection:'column',
        width:175,

        padding:8,
        margin:4,

        alignItems:'center',
        justifyContent:'center',

        borderWidth: 2,
        borderRadius:15,
    },
    image: {
        height:200,
        width:150,

        borderRadius:15,
    },
    text: {
        marginTop:7,
        marginBottom:3,
        flexWrap:'wrap',

        fontSize: 17,
        fontWeight:'bold',
    },
    text2: {
        flexWrap:'wrap'
    }
})