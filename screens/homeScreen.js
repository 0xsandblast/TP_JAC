import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {
    render() {
        return (
            <View title='HomeScreen' style={styles.container}>
                <Text> Home Screen test </Text>
                <Button title='aller aux details' onPress={() => this.props.navigation.navigate('Details')} />
            </View>            
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});