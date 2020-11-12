import { WORKOUTS } from '../../data/dummy-dataReal'
import * as firebase from '../../firebase/firebaseUtils'
import { TOGGLE_FAVORITE, SET_FILTERS, UPDATE_WORKOUT, DELETE_WORKOUT } from '../actions/workouts'

const initialState = {
    //workouts: WORKOUTS,
    //filteredWorkouts: WORKOUTS,
    workouts: firebase.getWorkouts(),
    filteredWorkouts: firebase.getWorkouts(),
    favoriteWorkouts: []
}

const workoutsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
          const existingIndex = state.favoriteWorkouts.findIndex(
            workout => workout.id === action.workoutId
          )
          if (existingIndex >= 0) {
            const updatedFavWorkouts = [...state.favoriteWorkouts]
            updatedFavWorkouts.splice(existingIndex, 1)
            return { ...state, favoriteWorkouts: updatedFavWorkouts }
          } else {
            const workout = state.workouts.find(workout => workout.id === action.workoutId)
            return { ...state, favoriteWorkouts: state.favoriteWorkouts.concat(workout) }
          }

        case SET_FILTERS:
          const appliedFilters = action.filters
          const updatedFilteredWorkouts = state.workouts.filter(workout => {
            if (appliedFilters.glutenFree && !workout.isGlutenFree) {
              return false
            }
            if (appliedFilters.lactoseFree && !workout.isLactoseFree) {
              return false
            }
            if (appliedFilters.vegetarian && !workout.isVegetarian) {
              return false
            }
            if (appliedFilters.vegan && !workout.isVegan) {
              return false
            }
            return true
          })
          return { ...state, filteredWorkouts: updatedFilteredWorkouts }

        case UPDATE_WORKOUT:
          const updatedWorkouts = [...state.workouts]
          const workoutIndex = state.workouts.findIndex(
            workout => workout.id === action.workout.id
          )
          
          workoutIndex > 0 ?
            updatedWorkouts[workoutIndex] = action.workout
          : updatedWorkouts.push(action.workout)

          firebase.updateWorkout(action.workout)
          return { ...state, workouts: updatedWorkouts, filteredWorkouts: updatedWorkouts }

        case DELETE_WORKOUT:
          const updatedDelWorkouts = [...state.workouts]
          const deletingIndex = updatedDelWorkouts.findIndex(
            workout => workout.id === action.workoutId
          )
          updatedDelWorkouts.splice(deletingIndex, 1)

          firebase.deleteWorkout(action.categoryId, action.workoutId)
          return { ...state, workouts: updatedDelWorkouts, filteredWorkouts: updatedDelWorkouts }
        default:
          return state
    }
}

export default workoutsReducer