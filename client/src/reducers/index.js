import { GET_HOURLY_EVENTS, GET_HOURLY_STATS, FILTER_HOURLY_STATS, SHOW_EVENTS, SHOW_STATS } from "../constants/action-types";

const initialState = {
  hourlyEvents: [],
  hourlyStats: [],
  filteredStats: [],
  showEvents: false,
  showStats: true
};

function rootReducer(state = initialState, action) {
  
  if (action.type === GET_HOURLY_EVENTS) {
    return {...state, hourlyEvents: [...action.payload]};
  }

  if (action.type === GET_HOURLY_STATS) {
    return {...state, hourlyStats: [...action.payload], filteredStats: [...action.payload]};
  }

  if (action.type === FILTER_HOURLY_STATS) {
    const filteredStats = state.hourlyStats.filter(stat => {
      return stat.location.toLowerCase().includes(action.payload.toLowerCase());
    });
    return {...state, filteredStats: [...filteredStats] };
  }

  if (action.type === SHOW_EVENTS) {
    return {...state, showEvents: true, showStats: false};
  }

  if (action.type === SHOW_STATS) {
    return {...state, showEvents: false, showStats: true};
  }

  return state;
};

export default rootReducer;