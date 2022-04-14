import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { styles } from './styles';

const Notas = () => {

    const [nota1, setNota1] = useState("")
    const [nota2, setNota2] = useState("")
    const [nota3, setNota3] = useState("")
    const [resultado, setResultado] = useState(0)

    const media = () => {
        setResultado( (Number(nota1) + Number(nota2) + Number(nota3) ) / 3)
    }
  
    return (
      <View style={styles.container}>

        <Text style={styles.tittle}>Calculando Média</Text>

        <TextInput style={styles.input}
            value={nota1}
            maxLength={2}
            onChangeText={(int) => setNota1(int)}
            placeholder="Digite a 1ª nota"
            keyboardType="numeric"
        />

        <TextInput style={styles.input}
            value={nota2}
            maxLength={2}
            onChangeText={(int) => {setNota2(int)}}
            placeholder="Digite a 2ª nota"
            keyboardType="numeric"
        />

        <TextInput style={styles.input}
            value={nota3}
            maxLength={2}
            onChangeText={(int) => {setNota3(int)}}
            placeholder="Digite a 3ª nota"
            keyboardType="numeric"
        />

        <Button
            title="Calcular"
            color="red"
            onPress={media}
        />

        <Text>Sua média é: {resultado.toFixed(2)}</Text>

        {resultado < 5 ? (
            <Text style={styles.reprovado}>Reprovado</Text>
        ) : resultado >= 5 && resultado < 7 ? (
            <Text style={styles.recuperacao}>Recuperação</Text>
        ) : resultado >= 7 ? (
            <Text style={styles.aprovado}>Aprovado</Text>
        ) : (
            <Text>Não foi possível calcular</Text>
        )}

      </View>
    );
};

export default Notas;