import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const NumberInput = props => {
  const { index, value, name, onChangeValue } = props
  return (
    <TextInput 
      style={styles.number}
      numeric
      keyboardType={'numeric'} 
      onChangeText={value => onChangeValue(index, name, value)}
    >
      {value}
    </TextInput>    
  )
}

const styles = StyleSheet.create({
  number: {
    fontFamily: 'montserrat',
    fontSize: 18,
    textAlign: 'center'
  }
});

export default NumberInput
