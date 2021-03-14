import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class List_item extends React.Component {
    render() {
        return (
            <View name='box' style={styles.box}>
                <Image style={styles.image} source={require('../Listes/TestPic.jpg')} />
                <Text name='nom' style={styles.text} numberOfLines={2}>Thomas Pesquet</Text>
                <Text name='description' style={styles.text2} numberOfLines={2} >Thomas Pesquet, né le 27 février 1978 à Rouen, est un spationaute français. Après une formation d'ingénieur aéronautique à Toulouse, Thomas Pesquet a occupé différents postes dans l'industrie aérospatiale et au Centre national d'études spatiales avant de devenir, en 2005, pilote de ligne.</Text>
            </View>
        );
    }
}

export default List_item;

const styles = StyleSheet.create({
    box: {
        borderWidth: 2,
        flexDirection:'column',
        padding:8,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        width:175,
    },
    image: {
        height:200,
        width:150,
        borderRadius:15,
    },
    text: {
        fontSize: 17,
        marginTop:7,
        fontWeight:'bold',
    },
    text2: {
        width: 150,
    }
})