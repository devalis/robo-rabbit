import React from 'react'
import { View, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import HeaderButton from '../components/HeaderButton'
import WorkoutList from '../components/WorkoutList'
import DefaultText from '../components/DefaultText'

const FavoritesScreen = props => {
  const workouts =  useSelector(state => state.workouts.workouts)
  //const favWorkouts = useSelector(state => state.workouts.favoriteWorkouts)

  favWorkouts = workouts.filter(workout => {
    return workout.isFavorite === true
  })

  //console.log('favoriteWorkouts: ', favoriteWorkouts);
  //console.log('favWorkouts: ', favWorkouts);

  if (favWorkouts.length === 0 || !favWorkouts) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite workouts found. Start adding some!</DefaultText>
      </View>
    )
  }

  return <WorkoutList listData={favWorkouts} favScreen={true} navigation={props.navigation} />
}

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FavoritesScreen