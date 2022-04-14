import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { styles } from './styles';

const VerificarNumeros = () => {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [num3, setNum3] = useState("");
    const [resultado, setresultado] = useState(null);

    function verificar() {
        
        if (num1>0 && num1<=9) {
          setresultado('Este número está entre 0 e 9')
         
        } else if (num2>10 && num2<=19) {
          setresultado('Este número está entre 10 e 19')
          
        }else if (num3>20) {
          setresultado('Este número é maior que 20')
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
                onPress={verificar}
            />

        </View>
    );
};

export default VerificarNumeros;