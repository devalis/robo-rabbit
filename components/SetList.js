import React from 'react'
import { View, FlatList } from 'react-native'

import SetItem from './SetItem'

const SetList = props => {
  const renderSetItem = itemData => {
    //const isFavorite = favoriteWorkouts.some(workout => workout.id === itemData.item.id)

    const setEntries = Object.entries(itemData.item)

    return (
      <SetItem
        index={itemData.index}
        item={setEntries}
        onChangeValue={props.onChangeSets}
        deleteSet={props.deleteSet}
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
    </View>
  )
}

export default SetList
