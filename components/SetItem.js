import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
 
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
      
      <Ionicons 
        style={styles.delete} 
        name='ios-close' 
        size={24} 
        color={Colors.primaryColor} 
        onPress={() => props.deleteSet(props.index)}
      /> 
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
  },
  delete: {
    padding: 8
  }
})

export default SetItem
