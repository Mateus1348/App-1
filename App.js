import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Notas from './src/components/Notas';
import Head from './src/components/Head';
import Menu from './src/components/Menu';
import VerificarNumeros from './src/components/VerificarNumeros';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Head></Head>
        <Notas></Notas>
        <VerificarNumeros></VerificarNumeros>
        <Menu></Menu>
      </ScrollView>
    </SafeAreaView>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  scroll:{
    backgroundColor: 'white'
  }
});