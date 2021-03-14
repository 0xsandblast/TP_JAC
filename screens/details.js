import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import List_item from "../Components/List_item";

class Details extends React.Component {
    render() {
        return (
                <View title='Details' style={styles.container}>

                    <List_item />

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