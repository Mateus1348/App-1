import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';

const Head = () => {
    return (
        <LinearGradient style={styles.container} colors={['#FF4500', '#FFA500']} start={{x:2, y:0}} end={{x:0, y:1}}>
            <Text style={styles.text}>Home</Text>
        </LinearGradient>
    );
}

export default Head;