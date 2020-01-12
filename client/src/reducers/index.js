import { GET_HOURLY_EVENTS, GET_HOURLY_STATS, FILTER_HOURLY_STATS, SHOW_EVENTS, SHOW_STATS, GET_DATA_LIST, FILTER_DATA_LIST } from "../constants/action-types";

const initialState = {
  dataList: [],
  filteredData: [],
  showEvents: false,
  showStats: true
};

function rootReducer(state = initialState, action) {
  
  if (action.type === GET_DATA_LIST) {
    return {...state, dataList: [...action.payload], filteredData: [...action.payload]};
  }

  if (action.type === FILTER_DATA_LIST) {
    const filteredData = state.dataList.filter(stat => {
      return stat.location.toLowerCase().includes(action.payload.toLowerCase());
    });
    return {...state, filteredData: [...filteredData] };
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