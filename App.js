import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import Notas from './src/components/Notas';
import Head from './src/components/Head';
import Menu from './src/components/Menu';
import VerificarNumeros from './src/components/VerificarNumeros';

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Head></Head>
      </View>
      <View>
        <Notas></Notas>
      </View>
      <View>
        <VerificarNumeros></VerificarNumeros>
      </View>
      <View>
        <Menu></Menu>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>

  );
}