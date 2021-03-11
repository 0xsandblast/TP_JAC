import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Details extends React.Component {
    render() {
        return (
            <View title='Details' style={styles.container}>
                <Text>
            Ceci est le 2e écran
                </Text>
            </View>
        );
    }
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});