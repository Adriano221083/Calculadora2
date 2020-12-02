import React, {useState, useEffect} from 'react';
import {StatusBar, SafeAreaView, View, StyleSheet} from 'react-native';

import Menu from './components/menu';
import Btn from './components/button';

var variables = {
  screenValue: '',
  submit: false,
  result: 0,
  dot: false,
  clear: 'AC',
};

export default function App() {
  const [valueScreen, setValueScreen] = useState(variables.screenValue);
  const [valueResult, setValueResult] = useState(variables.result);
  const [labelClear, setLabelClear] = useState(variables.clear);

  useEffect(() => {
    if (valueScreen === '') {
      setLabelClear('AC');
    }
  }, [valueScreen]);

  function addKey(key) {
    variables.screenValue += key;

    setValueScreen(variables.screenValue);
    setValueResult(variables.result);

    variables.submit = false;
    setLabelClear('C');
  }

  function clear() {
    if (variables.screenValue !== '') {
      setValueScreen(
        (variables.screenValue = valueScreen.substring(
          0,
          valueScreen.length - 1,
        )),
      );
    } else {
      variables = {
        screenValue: '',
        submit: false,
        result: 0,
        dot: false,
      };
      setValueScreen(variables.screenValue);
      setValueResult(variables.result);
    }
  }

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <SafeAreaView style={styles.container}>
        <Menu value={valueScreen} response={valueResult} />
        <View style={styles.buttons}>
          <Btn
            label={labelClear}
            buttonTop
            onClick={() => {
              clear();
            }}
          />
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

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
