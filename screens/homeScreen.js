import React from 'react';
import { View, Text, Button, StyleSheet, Image, FlatList } from 'react-native';
import eleves from '../Listes/elevesData';

class HomeScreen extends React.Component {
    render() {
        return (
            <View title='HomeScreen' style={{flex: 1}}>

                    <FlatList
                            data={eleves}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) => <Text>{item.name}, {item.description}</Text>} />

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
        flex:1,
    },
    sizeImage:{
        flex: 1,
        width: 200,
        height: 200,
        resizeMode:'contain',
    }
});