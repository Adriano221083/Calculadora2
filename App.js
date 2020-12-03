import React, {useState, useEffect} from 'react';
import {StatusBar, SafeAreaView, View, StyleSheet} from 'react-native';

import Menu from './components/menu';
import Btn from './components/button';

export default function App() {
  const [valueScreen, setValueScreen] = useState('');
  const [valueResult, setValueResult] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [dot, setDot] = useState(false);
  const [labelClear, setLabelClear] = useState('AC');

  useEffect(() => {
    if (valueScreen === '') {
      setLabelClear('AC');
    }
  }, [valueScreen]);

  function addKey(key) {
    if (key === '/' || key === '*' || key === '-' || key === '+') {
      setDot(false);
    }

    if (key === '.' && dot) {
      return;
    }

    if (key === '.' && !dot) {
      setDot(true);
    }

    if ((key === '/' || key === '*' || key === '-' || key === '+') && submit) {
      setValueScreen(valueResult + key);
      setValueResult(0);
      return;
    }
    setValueScreen(valueScreen + key);
    setSubmit(false);
    setLabelClear('C');
  }

  function calc() {
    try {
      setValueResult(eval(valueScreen)); //* Eval temp
      setSubmit(true);
    } catch {
      setValueResult('Error');
      setSubmit(true);
    }
  }

  function clear() {
    if (valueScreen !== '') {
      const tam = valueScreen.length - 1;
      setValueScreen(valueScreen.substring(0, tam));
    } else {
      reset();
    }
  }

  function reset() {
    setValueScreen('');
    setValueResult(0);
    setSubmit(false);
    setDot(false);
    setLabelClear('AC');
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
          <Btn
            label="="
            buttonOperations
            onClick={() => {
              calc();
            }}
          />
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
