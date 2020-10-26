import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-dataReal';
import * as firebase from '../firebase/firebaseUtils'
import WorkoutList from '../components/WorkoutList';
import DefaultText from '../components/DefaultText';

const CategoryWorkoutScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  const availableWorkouts = useSelector(state => state.workouts.filteredWorkouts);

  const displayedWorkouts = availableWorkouts.filter(
    workout => workout.categoryId.indexOf(catId) >= 0
  );

  //firebase.deleteWorkouts(catId)

  if (displayedWorkouts.length === 0) {
  //if (displayedWorkouts[0]) {
    return (
      <View style={styles.content}>
        <DefaultText>No workouts found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <WorkoutList listData={displayedWorkouts} navigation={props.navigation} />;
};

CategoryWorkoutScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  
  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryWorkoutScreen;