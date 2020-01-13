import { SHOW_EVENTS, SHOW_STATS, GET_DATA_LIST, FILTER_DATA_LIST, SORT_BY, SHOW_HOURLY, SET_MIN_VALUE, SET_ERROR, SET_SEARCH_TERM } from "../constants/action-types";
import Fuse from 'fuse.js';

const initialState = {
  dataList: [],
  filteredData: [],
  filters: {
    searchTerm: '',
    sortBy: 'date',
    events: 0,
    impressions: 0,
    clicks: 0,
    revenue: 0
  },
  showEvents: false,
  showStats: true,
  showHourly: true,
  error: { bool: false }
};

function rootReducer(state = initialState, action) {
  
  if (action.type === GET_DATA_LIST) {
    return {...state, error: {...state.error, bool: false}, dataList: [...action.payload], filteredData: [...action.payload]};
  }

  if (action.type === FILTER_DATA_LIST) {
    const options = { shouldSort: true, keys: ['location']};

    const fuse = new Fuse(state.dataList, options);

    let results = state.filters.searchTerm === '' ? state.dataList : fuse.search(state.filters.searchTerm);

    results.filter(row => 
      parseInt(row.events) >= state.filters.events 
      && parseInt(row.impressions) >= state.filters.impressions 
      && parseInt(row.clicks) >= state.filters.clicks 
      && parseInt(row.revenue) >= state.filters.revenue
    )
    .sort((a, b) => b[state.filters.sortBy] - a[state.filters.sortBy]);

    return {...state, filteredData: results};
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
    return {...state, filters: {...state, filters: {...state.filters, sortBy: action.payload}}};
  }

  if (action.type === SET_MIN_VALUE) {
    return {...state, filters: {...state.filters, [action.payload.type]: action.payload.value}};
  }

  if (action.type === SET_ERROR) {
    return {...state, error: {...state.error, bool: true, message: action.payload}}
  }

  if (action.type === SET_SEARCH_TERM) {
    return {...state, filters: {...state.filters, searchTerm: action.payload}};
  }

  return state;
};

export default rootReducer;