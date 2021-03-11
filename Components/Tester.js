import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Tester extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.textstyle}>
                    Ceci est un test
                </Text>
            </View>
        )
    }
}

export default Tester;

const styles = StyleSheet.create({
    textstyle:{
        fontSize:30,
        color:'red',
        marginTop:20
    }
})