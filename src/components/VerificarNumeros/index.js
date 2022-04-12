import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { styles } from './styles';

const VerificarNumeros = () => {
  
    return (
        <View style={styles.container}>

            <Text style={styles.tittle}>Será que digitos </Text>
            <Text style={styles.tittle}>estão na casa certa?</Text>

            <TextInput style={styles.input}
                maxLength={1}
                placeholder='De 0 à 9'
                keyboardType='numeric'
            />

            <TextInput style={styles.input}
                maxLength={2}
                placeholder='De 10 à 19'
                keyboardType='numeric'
            />

            <TextInput style={styles.input}
                maxLength={2}
                placeholder='De 20 à 50'
                keyboardType='numeric'
            />

            <Button
                title="Verificar"
            />

        </View>
    );
};

export default VerificarNumeros;