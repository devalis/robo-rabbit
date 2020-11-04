import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import NumberInput from '../components/NumberInput'
import Colors from '../constants/Colors'

const SetItem = props => {
  return (
    <View style={styles.set}>
      <Text style={styles.setNumber}>{props.index + 1}</Text>

      {props.item.map(([key, value]) => {
        return (
          <NumberInput 
            key={key}
            index={props.index}
            value={value} 
            name={key}
            onChangeValue={props.onChangeValue}
          />
        )
      })}
    </View>
  )
}

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
  }
})

export default SetItem
