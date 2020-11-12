import React, { useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { useDispatch } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { deleteWorkout } from '../store/actions/workouts'
import Colors from '../constants/Colors'


const WorkoutItem = props => {
  const { id, categoryId, title, description, date } = props.workout
  
  const dispatch = useDispatch()

  const deleteWorkoutHandler = useCallback(() => {
    dispatch(deleteWorkout(categoryId, id))
  }, [dispatch, id])

  return (
    <View style={styles.WorkoutItem}>
      <TouchableOpacity onPress={props.onSelectWorkout}> 
        <MaterialCommunityIcons 
          style={styles.delete} 
          name='delete-empty-outline' 
          size={24} 
          color={Colors.primaryColor} 
          onPress={() => deleteWorkoutHandler()}
        />  
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>{date}</Text>      
      </TouchableOpacity>      
    </View>
  )
}

const styles = StyleSheet.create({
  WorkoutItem: {
    height: 180,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10
  },
  delete: {
    zIndex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    position: 'absolute',
    top: 0,
    right: 0
  },
  title: {
    fontFamily: 'montserrat-bold',
    fontSize: 20,
    color: Colors.primaryColor,
    paddingVertical: 25,
    paddingHorizontal: 15
  },
  description: {
    height: '30%',
    paddingHorizontal: 15,
    justifyContent: 'space-between'
  },
  date: {
    paddingVertical: 15,
    paddingHorizontal: 15
  }
})

export default WorkoutItem
