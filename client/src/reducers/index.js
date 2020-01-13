import { SHOW_EVENTS, SHOW_STATS, GET_DATA_LIST, FILTER_DATA_LIST, SORT_BY, SHOW_HOURLY } from "../constants/action-types";
import Fuse from 'fuse.js';

const initialState = {
  dataList: [],
  filteredData: [],
  showEvents: false,
  showStats: true,
  showHourly: true,
};

function rootReducer(state = initialState, action) {
  
  if (action.type === GET_DATA_LIST) {
    return {...state, dataList: [...action.payload], filteredData: [...action.payload]};
  }

  if (action.type === FILTER_DATA_LIST) {
    const options = {
      shouldSort: true,
      keys: ['location']
    };
    const fuse = new Fuse(state.dataList, options);

    if (action.payload.length === 0) {
      return {...state, filteredData: state.dataList};
    } else {
      return {...state, filteredData: fuse.search(action.payload)};
    }
  }

  if (action.type === SHOW_EVENTS) {
    return {...state, showEvents: true, showStats: false};
  }

  if (action.type === SHOW_STATS) {
    return {...state, showEvents: false, showStats: true};
  }

  if (action.type === SHOW_HOURLY) {
    return {...state, showHourly: action.payload };
  }

  if (action.type === SORT_BY) {
    const sorted = state.filteredData.sort((a, b) => b[action.payload] - a[action.payload]);
    return {...state, filteredData: sorted};
  }

  return state;
};

export default rootReducer;