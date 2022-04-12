import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Notas from './src/components/Notas';
import Head from './src/components/Head';
import Menu from './src/components/Menu';
import VerificarNumeros from './src/components/VerificarNumeros';

export default function App() {
  return (
    <SafeAreaView style={style.container}>
        <Head></Head>
        <Notas></Notas>
        <VerificarNumeros></VerificarNumeros>
        <Menu></Menu>
      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

const style=StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})