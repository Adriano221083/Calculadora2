import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

import Menu from './components/menu';
import Btn from './components/button';

var variables = {
  screenValue: '',
  submit: false,
  result: 0,
  dot: false,
};

export default function App() {
  const [valueScreen, setValueScreen] = useState(variables.screenValue);
  const [valueResult, setValueResult] = useState(variables.result);

  function addKey(key) {
    variables.screenValue += key;

    setValueScreen(variables.screenValue);
    setValueResult(variables.result);

    variables.submit = false;
  }

  function clear() {
    // click --> limpar ultima key
    // clicar e segurar? --> limpar tudo?
  }

  return (
    <SafeAreaView style={styles.container}>
      <Menu value={valueScreen} response={valueResult} />
      <View style={styles.buttons}>
        <Btn label="AC" buttonTop onClick={() => {}} />
        <Btn
          label="("
          buttonTop
          onClick={() => {
            addKey('(');
          }}
        />
        <Btn
          label=")"
          buttonTop
          onClick={() => {
            addKey(')');
          }}
        />
        <Btn
          label="/"
          buttonOperations
          onClick={() => {
            addKey('/');
          }}
        />
        <Btn
          label="7"
          onClick={() => {
            addKey('7');
          }}
        />
        <Btn
          label="8"
          onClick={() => {
            addKey('8');
          }}
        />
        <Btn
          label="9"
          onClick={() => {
            addKey('9');
          }}
        />
        <Btn
          label="x"
          buttonOperations
          onClick={() => {
            addKey('*');
          }}
        />
        <Btn
          label="4"
          onClick={() => {
            addKey('4');
          }}
        />
        <Btn
          label="5"
          onClick={() => {
            addKey('5');
          }}
        />
        <Btn
          label="6"
          onClick={() => {
            addKey('6');
          }}
        />
        <Btn
          label="-"
          buttonOperations
          onClick={() => {
            addKey('-');
          }}
        />
        <Btn
          label="1"
          onClick={() => {
            addKey('1');
          }}
        />
        <Btn
          label="2"
          onClick={() => {
            addKey('2');
          }}
        />
        <Btn
          label="3"
          onClick={() => {
            addKey('3');
          }}
        />
        <Btn
          label="+"
          buttonOperations
          onClick={() => {
            addKey('+');
          }}
        />
        <Btn
          label="0"
          buttonDouble
          onClick={() => {
            addKey('0');
          }}
        />
        <Btn
          label="."
          onClick={() => {
            addKey('.');
          }}
        />
        <Btn label="=" buttonOperations onClick={() => {}} />
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
