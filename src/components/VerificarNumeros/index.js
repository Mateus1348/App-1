import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { styles } from './styles';

const VerificarNumeros = () => {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [num3, setNum3] = useState("");
    const [resultado, setresultado] = useState(null);

    function verificar() {
        
        if (num1>1 && num1<=10) {
          setresultado('O número está entre 1 e 10')
         
        } else if (num2>11 && num2<=29) {
          setresultado('O número está entre 11 e 20')
          
        }else if (num3>21) {
          setresultado('O número é maior que 21')
        }
      }
  
    return (
        <View style={styles.container}>

            <Text style={styles.tittle}>Verificagem de números</Text>

            <Text>{resultado}</Text>
            <TextInput style={styles.input}
                value={num1}
                onChangeText={(int) => setNum1(int)}
                placeholder='Digite um valor'
                keyboardType='numeric'
            />

            <Text>{resultado}</Text>
            <TextInput style={styles.input}
                value={num2}
                onChangeText={(int) => setNum2(int)}
                placeholder='Digite um valor'
                keyboardType='numeric'
            />

            <Text>{resultado}</Text>
            <TextInput style={styles.input}
                value={num3}
                onChangeText={(int) => setNum3(int)}
                placeholder='Digite um valor'
                keyboardType='numeric'
            />

            <Button
                title="Verificar"
                color={'green'}
                onPress={verificar}
            />

        </View>
    );
};

export default VerificarNumeros;