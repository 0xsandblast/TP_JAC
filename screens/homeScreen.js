import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

class HomeScreen extends React.Component {
    render() {
        return (
            <View title='HomeScreen' style={{flex: 1}}>

                <View style={styles.listeImage}>
                    <Image style={styles.sizeImage} source={require('../Listes/TestPic.jpg')} />
                    <Image style={styles.sizeImage} source={require('../Listes/TestPic.jpg')} />
                </View>

                <View style={styles.container}>
                <Text> Home Screen test </Text>
                <Button title='aller aux details' onPress={() => this.props.navigation.navigate('Details')} />
                </View>
            </View>            
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    listeImage: {
        flex:5,
        flexDirection: 'row',
        alignItems: 'center',
        padding:15,
    },
    sizeImage:{
        flex: 1,
        width: 200,
        height: 200,
        resizeMode:'contain',
    }
});