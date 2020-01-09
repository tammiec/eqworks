import { GET_HOURLY_EVENTS, GET_HOURLY_STATS, FILTER_HOURLY_STATS } from "../constants/action-types";

const initialState = {
  hourlyEvents: [],
  hourlyStats: [],
  filteredStats: [],
};

function rootReducer(state = initialState, action) {
  
  if (action.type === GET_HOURLY_EVENTS) {
    return {...state, hourlyEvents: [...action.payload]};
  }

  if (action.type === GET_HOURLY_STATS) {
    return {...state, hourlyStats: [...action.payload], filteredStats: [...action.payload]};
  }

  if (action.type === FILTER_HOURLY_STATS) {
    const filteredStats = state.hourlyStats.filter(stat => stat.location.includes(action.payload))
    return {...state, filteredStats: [...filteredStats] }
  }

  return state;
};

export default rootReducer;