import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

import Menu from './components/menu';
import Btn from './components/button';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu value={0} response={0} />
      <View style={styles.buttons}>
        <Btn label="AC" buttonTop onClick={() => {}}></Btn>
        <Btn label="(" buttonTop onClick={() => {}}></Btn>
        <Btn label=")" buttonTop onClick={() => {}}></Btn>
        <Btn label="/" buttonOperations onClick={() => {}}></Btn>
        <Btn label="7" onClick={() => {}}></Btn>
        <Btn label="8" onClick={() => {}}></Btn>
        <Btn label="9" onClick={() => {}}></Btn>
        <Btn label="x" buttonOperations onClick={() => {}}></Btn>
        <Btn label="4" onClick={() => {}}></Btn>
        <Btn label="5" onClick={() => {}}></Btn>
        <Btn label="6" onClick={() => {}}></Btn>
        <Btn label="-" buttonOperations onClick={() => {}}></Btn>
        <Btn label="1" onClick={() => {}}></Btn>
        <Btn label="2" onClick={() => {}}></Btn>
        <Btn label="3" onClick={() => {}}></Btn>
        <Btn label="+" buttonOperations onClick={() => {}}></Btn>
        <Btn label="0" buttonDouble onClick={() => {}}></Btn>
        <Btn label="." onClick={() => {}}></Btn>
        <Btn label="=" buttonOperations onClick={() => {}}></Btn>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#000',
  },

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
