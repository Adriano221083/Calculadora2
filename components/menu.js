import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default (props) => {
  return (
    <View style={styles.menu}>
      <Text style={styles.menuOperations} numberOfLines={1}>
        {props.value}
      </Text>

      <Text style={styles.menuResponse} numberOfLines={1}>
        {props.response}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: '100%',

    justifyContent: 'center',
    alignItems: 'flex-end',

    backgroundColor: '#000',
    padding: 20,
  },
  menuOperations: {
    fontSize: 50,
    color: '#FFF',
  },
  menuResponse: {
    fontSize: 25,
    color: '#FFF',
  },
});
