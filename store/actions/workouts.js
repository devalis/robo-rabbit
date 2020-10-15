export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';
export const UPDATE_WORKOUT = 'UPDATE_WORKOUT';

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, workoutId: id };
};

export const setFilters = filterSettings => {
    return { type: SET_FILTERS, filters: filterSettings };
};

export const updateWorkout = (workout) => {
    return { type: UPDATE_WORKOUT, workout };
}