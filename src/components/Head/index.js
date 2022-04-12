import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const Head = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
        </View>
    );
}

export default Head;