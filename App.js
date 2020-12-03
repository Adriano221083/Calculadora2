import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';

import Calc from './components/calc';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#000" />
      <SafeAreaView style={styles.container}>
        <Calc />
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#000',
  },
});
