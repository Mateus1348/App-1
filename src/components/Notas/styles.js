import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },
    tittle:{
        fontSize: 20
    },
    input: {
        height: 25,
        margin: 5,
        borderWidth: 1
    },
    reprovado:{
        fontSize: 20,
        color: 'red'
    },
    recuperacao:{
        fontSize: 20,
        color: 'red'
    },
    aprovado:{
        fontSize: 20,
        color: 'green'
    }
});