import { SHOW_EVENTS, SHOW_STATS, GET_DATA_LIST, FILTER_DATA_LIST, SORT_BY, SHOW_HOURLY, SET_MIN_VALUE, SET_ERROR, SET_SEARCH_TERM, RESET } from "../constants/action-types";
import Fuse from 'fuse.js';

const initialState = {
  dataList: [],
  filteredData: [],
  searchTerm: '',
  sortBy: 'default',
  minValues: {
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
    return {...state, error: {...state.error, bool: false}, dataList: [...action.payload], filteredData: [...action.payload], filteredDataByMin: [...action.payload]};
  }

  if (action.type === FILTER_DATA_LIST) {
    const options = {
      shouldSort: true,
      keys: ['location']
    };
    const fuse = new Fuse(state.filteredData, options);
    const results = (state.searchTerm === '' ? state.dataList : fuse.search(state.searchTerm))
      .sort((a, b) => b[state.sortBy] - a[state.sortBy])
      .filter(row => {
        let events = true;
        let impressions = true;
        let clicks = true;
        let revenue = true;

        if (row.events && parseInt(row.events) <= state.minValues.events) {
          events = false;
        }
        if (row.impressions && parseInt(row.impressions) <= state.minValues.impressions) {
          impressions = false;
        }
        if (row.clicks && parseInt(row.clicks) <= state.minValues.clicks) {
          clicks = false;
        }
        if (row.revenue && parseInt(row.revenue) <= state.minValues.revenue) {
          revenue = false;
        }      
        return (events && impressions && clicks && revenue);
      });
    return {...state, filteredData: [...results]};
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
    // let sorted = state.filteredData.sort((a, b) => b[action.payload] - a[action.payload]);
    return {...state, sortBy: action.payload};
  }

  if (action.type === SET_MIN_VALUE) {
    // let filtered = state.filteredData.filter(row => parseInt(row[action.payload.type]) >= action.payload.value);
    return {...state, minValues: {...state.minValues, [action.payload.type]: action.payload.value}};
  }

  if (action.type === SET_ERROR) {
    return {...state, error: {...state.error, bool: true, message: action.payload}}
  }

  if (action.type === SET_SEARCH_TERM) {
    return {...state, searchTerm: action.payload}
  }

  if (action.type === RESET) {
    return {
      ...state, 
      filteredData: [...state.dataList], 
      filteredDataByMin: [...state.dataList],
      searchTerm: '',
      minValues: {
        events: 0,
        impressions: 0,
        clicks: 0,
        revenue: 0
      }
    };
  }

  return state;
};

export default rootReducer;