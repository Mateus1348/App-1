import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Menu = () => {
    return (
        <View style={styles.container}>
            <AntDesign name="home" size={24} color="black" />
            <AntDesign name="search1" size={24} color="black" />
            <AntDesign name="videocamera" size={24} color="black" />
            <AntDesign name="appstore-o" size={24} color="black" />
            <AntDesign name="setting" size={24} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderWidth: 1,
        backgroundColor: 'white',
        height: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default Menu;