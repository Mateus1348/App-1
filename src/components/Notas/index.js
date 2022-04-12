import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Notas = () => {

    const [nota1, setNota1] = useState("")
    const [nota2, setNota2] = useState("")
    const [nota3, setNota3] = useState("")
    const [resultado, setResultado] = useState(0)

    const media = () => {
        setResultado( (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) ) / 3)
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Calculando Média</Text>
        <TextInput style={styles.input}
            value={nota1}
            onChangeText={(int) => setNota1(int)}
            placeholder="Digite a 1ª nota"
            keyboardType='numeric'
        />
        <TextInput style={styles.input}
            value={nota2}
            onChangeText={(int) => {setNota2(int)}}
            placeholder="Digite a 2ª nota"
            keyboardType="numeric"
        />
        <TextInput style={styles.input}
            value={nota3}
            onChangeText={(int) => {setNota3(int)}}
            placeholder="Digite a 3ª nota"
            keyboardType="numeric"
        />
        <Button 
            title="Calcular"
            onPress={media}
        />
        <Text>Sua média é: <TextInput style={styles.inputMedia}
            value={resultado}
            onChangeText={(int)=>{setResultado(int)}}
        /></Text>
        <Text>Você foi {media < 5 ? (
            <Text >Reprovado</Text>
        ) : media >= 5 && media < 7 ? (
            <Text >Recuperação</Text>
        ) : media >= 7 ? (
            <Text >Aprovado</Text>
        ) : (
            <Text >Não foi possível calcular</Text>
        )}</Text>
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
        color: 'blue'
    },
    inputMedia:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
,       color: 'blue'
    },
    text:{
        fontSize: 20,
    },
});

export default Notas;