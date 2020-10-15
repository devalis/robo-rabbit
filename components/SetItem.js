import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Colors from '../constants/Colors'

const SetItem = props => {
  return (
    <View style={styles.set}>
      <Text style={styles.setNumber}>{props.setNumber}</Text>
      <Text style={styles.setSpecs}>{props.reps}</Text>
      <Text style={styles.setSpecs}>{props.meters}</Text>
      <Text style={styles.setSpecs}>{props.pace}</Text>  
    </View>
  );
};

const styles = StyleSheet.create({
  set: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5
  },
  setNumber: {
    borderRadius: 15,
    width: 30,
    height: 30,
    padding: 5,
    borderColor: Colors.primaryColor,
    borderWidth: 2,
    textAlign: 'center'
  },
  setSpecs: {
    fontFamily: 'montserrat',
    fontSize: 18,
    textAlign: 'center'
  }
});

export default SetItem;
