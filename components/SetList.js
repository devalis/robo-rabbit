import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import SetItem from './SetItem'

const SetList = props => {
  //const favoriteWorkouts = useSelector(state => state.workouts.favoriteWorkouts)

  const renderSetItem = itemData => {
    //const isFavorite = favoriteWorkouts.some(workout => workout.id === itemData.item.id)
    
    return (
      <SetItem
        setNumber={itemData.index + 1}
        reps={itemData.item.reps}
        meters={itemData.item.meters}
        pace={itemData.item.pace}
        // onSelectWorkout={() => {
        //   props.navigation.navigate({
        //     routeName: 'WorkoutDetail',
        //     params: {
        //       workoutId: itemData.item.id,
        //       workoutTitle: itemData.item.title,
        //       isFav: isFavorite
        //     }
        //   })
        // }}
      />
    )
  }

  return (
    <FlatList
      data={props.listData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderSetItem}
      style={{ width: '100%' }}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default SetList
