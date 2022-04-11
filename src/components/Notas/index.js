import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Notas = () => {

    const [nota1, setNota1] = React.useState("")
    const [nota2, setNota2] = React.useState("")
    // const [result, setResult] = React.useState(0)
    const [resultado, setResultado] = React.useState(0)
    const [divisao] = React.useState(2)

    const media = () => {
        setResultado((parseFloat(nota1)+parseFloat(nota2)) / parseFloat(divisao))
        // setResultado(parseFloat(result) / (divisao))
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Calculando Média</Text>
        <TextInput style={styles.input}
            value={String(nota1)}
            onChangeText={(texto)=>{setNota1(texto)}}
            placeholder="Digite a 1ª nota"
            keyboardType='numeric'
        />
        <TextInput style={styles.input}
            value={String(nota2)}
            onChangeText={(texto)=>{setNota2(texto)}}
            placeholder="Digite a 2ª nota"
            keyboardType="numeric"
        />
        <Button 
            title="Calcular"
            onPress={()=>media()}
        />
        <Text>O resultado foi: </Text>
        <TextInput style={styles.input}
            value={String(resultado)}
            onChangeText={(texto)=>{setResultado(texto)}}
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

export default Notas;