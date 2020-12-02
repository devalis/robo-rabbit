import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import WorkoutItem from './WorkoutItem'
import * as firebase from '../firebase/firebaseUtils'
import Colors from '../constants/Colors'

const WorkoutList = props => {
  const catId = props.navigation.getParam('categoryId')
  const favoriteWorkouts = useSelector(state => state.workouts.favoriteWorkouts)

  const addWorkout = () => {
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0') 
    const yyyy = today.getFullYear()
  
    today = mm + '.' + dd + '.' + yyyy

    firebase.addWorkout(catId).then(res => {
      const newWorkout = {
        id: res,
        categoryId: catId,
        title: '',
        description: '',
        date: today,
        sets: []
      }
      props.navigation.navigate({
        routeName: 'WorkoutDetail',
        params: {
          workoutId: res,
          workout: newWorkout,
          isFav: false
        }
      })
    })
  }

  const renderWorkoutItem = itemData => {
    return (
      <WorkoutItem
        workout={itemData.item}
        onSelectWorkout={() => {
          props.navigation.navigate({
            routeName: 'WorkoutDetail',
            params: {
              catId: itemData.item.categoryId,
              workoutId: itemData.item.id
            }
          })
        }}
      />
    )
  }

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderWorkoutItem}
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
      />
      {!props.favScreen ?
        <Ionicons 
          style={styles.add} 
          name='ios-add-circle' 
          size={45} 
          color={Colors.primaryColor} 
          onPress={addWorkout}
        /> 
        : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  add: {
    position: 'absolute',
    bottom:0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 15
  }
})

export default WorkoutList
