import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import List_item from "../Components/List_item";

class Details extends React.Component {
    render() {
        return (
                <View title='Details' style={styles.container}>
                    <Text>Details screen</Text>
                </View>
        );
    }
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});