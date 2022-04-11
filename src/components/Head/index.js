import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Head = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>Home</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderWidth: 1,
        backgroundColor: 'orange',
    },
    header:{
        height: 60,
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    texto:{
        color: 'black',
        fontSize: 30,
    },
});

export default Head;