import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Notas from './src/components/Notas';
import Head from './src/components/Head';
import Menu from './src/components/Menu';
import VerificarNumeros from './src/components/VerificarNumeros';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Head></Head>
        <Notas></Notas>
        <VerificarNumeros></VerificarNumeros>
        <Menu></Menu>
      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});