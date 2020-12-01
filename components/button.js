import React from 'react';
import {TouchableHighlight, Text, StyleSheet, Dimensions} from 'react-native';

export default (props) => {
  const styleButtons = [styles.button];

  if (props.buttonOperations) {
    styleButtons.push(styles.buttonOperations);
  }

  if (props.buttonTop) {
    styleButtons.push(styles.buttonTop);
  }

  if (props.buttonDouble) {
    styleButtons.push(styles.buttonDouble);
  }

  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styleButtons}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width / 4 - 15,
    height: Dimensions.get('window').width / 4 - 15,

    backgroundColor: '#333',
    color: '#FFF',

    borderRadius: 50,

    fontSize: 35,
    padding: 15,
    textAlign: 'center',
    marginLeft: 15,
    marginTop: 15,
  },

  buttonOperations: {
    backgroundColor: '#e67e00',
  },

  buttonTop: {
    backgroundColor: '#b3b3b3',
    color: '#000',
  },

  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2 - 15,
  },
});
