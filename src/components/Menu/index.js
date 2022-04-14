import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

const Menu = () => {
    return (
        <View style={styles.container}>

            <AntDesign name="home" size={40} color="black" />
            <AntDesign name="search1" size={40} color="black" />
            <AntDesign name="videocamera" size={40} color="black" />
            <AntDesign name="appstore-o" size={40} color="black" />
            <AntDesign name="setting" size={40} color="black" />
            
        </View>
    );
}

export default Menu;