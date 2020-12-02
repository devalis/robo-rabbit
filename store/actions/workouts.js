export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
export const SET_FILTERS = 'SET_FILTERS'
export const UPDATE_WORKOUT = 'UPDATE_WORKOUT'
export const DELETE_WORKOUT = 'DELETE_WORKOUT'

export const toggleFavorite = (catId, id) => {
    return { type: TOGGLE_FAVORITE, categoryId: catId, workoutId: id }
}

export const setFilters = filterSettings => {
    return { type: SET_FILTERS, filters: filterSettings }
}

export const updateWorkout = (workout) => {
    return { type: UPDATE_WORKOUT, workout }
}

export const deleteWorkout = (catId, id) => {
    return { type:  DELETE_WORKOUT, categoryId: catId, workoutId: id }
}