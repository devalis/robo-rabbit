import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';


const NumberInput = props => {
  const [myNumber, setMyNumber] = useState(props.value)

  return (
    <TextInput 
      style={styles.number}
      keyboardType='number-pad' 
      onChangeText={value => {
        setMyNumber(value)
        props.onChangeValue(props.index, props.name, value)
      }}
      value={myNumber}
    />
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
