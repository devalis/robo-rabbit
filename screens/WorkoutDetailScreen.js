import React, { useState, useEffect, useCallback } from 'react'
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'
import { YellowBox } from 'react-native'
import _ from 'lodash'

import HeaderButton from '../components/HeaderButton'
import SetHeaders from '../components/SetHeaders'
import SetList from '../components/SetList'
import { toggleFavorite, updateWorkout } from '../store/actions/workouts'

import Colors from '../constants/Colors'

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested'])
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('VirtualizedLists should never be nested') <= -1) {
    _console.warn(message);
  }
};

const WorkoutDetailScreen = props => {
  const catId = props.navigation.getParam('catId')
  const workoutId = props.navigation.getParam('workoutId')
  const newWorkout = props.navigation.getParam('workout')

  const availableWorkouts = useSelector(state => state.workouts.workouts)
  const selectedWorkout =  newWorkout ? newWorkout : availableWorkouts.find(workout => workout.id === workoutId)
  const currentWorkoutIsFavorite = selectedWorkout.isFavorite ? true : false
  
  const [title, setTitle] = useState(selectedWorkout.title)
  const [description, setDescription] = useState(selectedWorkout.description)

  let setData = Object.keys(selectedWorkout.sets).map(key => {
    return selectedWorkout.sets[key];
  })

  setData = setData.map(set => {
    let setOrder = {
      reps: null,
      meters: null,
      pace: null
    }

    set = Object.assign(setOrder, set)
    return set
  })

  const [sets, setSets] = useState(setData)

  selectedWorkout.title = title
  selectedWorkout.description = description
  selectedWorkout.sets = sets

  const onChangeSets = (index, name, value) => {
    const changedSets = [...sets]
    let changedSet = sets[index]
    changedSet = {...changedSet, [name]: value}
    changedSets[index] = changedSet
    setSets(changedSets)
  };

  const addSet = () => {
    setSets([
      ...sets, 
      {
        reps: 0,
        meters: 0,
        pace: 0
      }
    ])
  }

  const deleteSet = (index) => {
    const changedSets = [...sets]
    changedSets.splice(index, 1)
    setSets(changedSets)
  } 

  const dispatch = useDispatch()

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(catId, workoutId))
  }, [dispatch, workoutId])

  const updateWorkoutHandler = useCallback(() => {
    dispatch(updateWorkout(selectedWorkout))
    props.navigation.goBack()
  }, [dispatch, selectedWorkout])

  useEffect(() => {
    props.navigation.setParams({ workoutTitle: selectedWorkout.title })
    props.navigation.setParams({toggleFav: toggleFavoriteHandler})
  }, [title, toggleFavoriteHandler])

  useEffect(() => {
    props.navigation.setParams({ isFav: currentWorkoutIsFavorite })
  }, [currentWorkoutIsFavorite])

  return (
    <View>
      <ScrollView>
      <View style={styles.section}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder='Add a title for your workout'
          onChangeText={newValue => setTitle(newValue)}
          value={title}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder='Add a description for your workout'
          onChangeText={newValue => setDescription(newValue)}
          value={description}
        />
      </View>
      <View style={styles.section}>
        <SetHeaders addSet={addSet} />
        <SetList 
          listData={setData} 
          onChangeSets={onChangeSets}
          deleteSet={deleteSet}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => updateWorkoutHandler()}
          >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  )
}

WorkoutDetailScreen.navigationOptions = navigationData => {
  const workoutTitle = navigationData.navigation.getParam('workoutTitle')
  const toggleFavorite = navigationData.navigation.getParam('toggleFav')
  const isFavorite = navigationData.navigation.getParam('isFav')

  return {
    headerTitle: workoutTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10
  },
  label: {
    fontFamily: 'montserrat-bold',
    color: Colors.primaryColor,
    paddingLeft: 2
  },
  input: {
    fontFamily: 'montserrat',
    borderBottomColor: Colors.primaryColor,
    borderBottomWidth: 0.5
  },
  button: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 5,
    alignSelf: 'center',
    marginTop: '5%',
    width: '25%'
  },
  buttonText: {
    color: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 18
  }
})

export default WorkoutDetailScreen