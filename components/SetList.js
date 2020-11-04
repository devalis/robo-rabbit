import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import SetItem from './SetItem'
import Colors from '../constants/Colors'

const SetList = props => {
  const renderSetItem = itemData => {
    //const isFavorite = favoriteWorkouts.some(workout => workout.id === itemData.item.id)

    const setEntries = Object.entries(itemData.item)

    return (
      <SetItem
        index={itemData.index}
        item={setEntries}
        onChangeValue={props.onChangeSets}
      />
    )
  }

  return (
    <View>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderSetItem}
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
      />
      <Ionicons 
          style={styles.add} 
          name='ios-add-circle' 
          size={32} 
          color={Colors.primaryColor} 
          onPress={props.addSet}
        /> 
    </View>
  )
}

const styles = StyleSheet.create({
  add: {
    padding: 8
  }
})

export default SetList
