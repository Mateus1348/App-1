import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import Notas from './src/components/Notas';
import Head from './src/components/Head';
import Menu from './src/components/Menu';
import VerificarNumeros from './src/components/VerificarNumeros';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Head></Head>
        <Notas></Notas>
        <VerificarNumeros></VerificarNumeros>
        <Menu></Menu>
      <StatusBar style="auto" />
    </SafeAreaView>

  );
}