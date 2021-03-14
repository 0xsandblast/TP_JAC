import React from 'react';
import { View, Text, Button, StyleSheet, Image, FlatList } from 'react-native';
import eleves from '../Listes/elevesData';
import List_item from '../Components/List_item'

class HomeScreen extends React.Component {
    render() {
        return (
            <View title='HomeScreen' style={{flex: 1}}>

                <FlatList
                    contentContainerStyle={styles.flatstyle}
                    numColumns={2}
                    data={eleves}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <List_item eleve={item}/>} />

                <View style={styles.BotBar}>
                    <Text> Home Screen test </Text>
                    <Button title='aller aux details' onPress={() => this.props.navigation.navigate('Details')} />
                </View>

            </View>            
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    flatstyle: {
        alignItems:'center',
        justifyContent:'center'
    },
    BotBar: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});