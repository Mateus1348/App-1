import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const Head = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>Home</Text>
            </View>
        </View>
    );
}

export default Head;