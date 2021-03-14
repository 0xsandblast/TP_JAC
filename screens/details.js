import React from 'react';
import { View, Text, StyleSheet, Image, ListView } from 'react-native';

function ListeVue() {
    return(
        <View name='box' style={styles.box}>
            <View name='imagevue' style={styles.imagevue} >
                <Image style={styles.image} source={require('../Listes/TestPic.jpg')} />
            </View>

            <Text name='nom' style={styles.text}>Thomas Pesquet</Text>

            <Text name='description' style={styles.text2} numberOfLines={2} >Thomas Pesquet, né le 27 février 1978 à Rouen, est un spationaute français. Après une formation d'ingénieur aéronautique à Toulouse, Thomas Pesquet a occupé différents postes dans l'industrie aérospatiale et au Centre national d'études spatiales avant de devenir, en 2005, pilote de ligne.</Text>
        </View>
)}


class Details extends React.Component {
    render() {
        return (
                <View title='Details' style={styles.container}>

                    <Text>
                        Ceci est le deuxième écran.
                    </Text>

                </View>
        );
    }
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    scroll:{
        flex:1,
        backgroundColor:'red',
        flexDirection:'row',
    },
    box: {
        width:150,
        justifyContent: 'center',
        alignItems:'center',
        padding:7,
        margin:10,
        borderWidth:3,
        borderColor:'#BEBEBE',
        borderRadius:10,
        flexDirection:'column',
        backgroundColor:'yellow'
    },
    image: {
        height: 175,
        width: 125,
        borderRadius:10,
    },
    imagevue: {
        alignItems:'center',
    },
    text:{
        fontSize:18,
        padding:5,
        fontWeight:'bold',
        justifyContent:'center',
    },
    text2:{
        fontSize:18,
    }
});