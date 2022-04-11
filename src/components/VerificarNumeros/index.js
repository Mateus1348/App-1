import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const VerificarNumeros = () => {
  
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Verificando os números certos</Text>
            <Text>Digite os números abaixo</Text>
            <TextInput style={styles.input}
                placeholder='De 0 à 10'
                keyboardType='numeric'
            />
            <TextInput style={styles.input}
                placeholder='De 11 à 19'
                keyboardType='numeric'
            />
            <TextInput style={styles.input}
                placeholder='Mais 20'
                keyboardType='numeric'
            />
            <Button
                title="Verificar"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50,
    },
    input: {
        height: 20,
        margin: 5,
        borderWidth: 1,
        padding: 10,
    },
    text:{
        fontSize: 20,
    },
});

export default VerificarNumeros;