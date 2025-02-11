import { SHOW_EVENTS, SHOW_STATS, GET_DATA_LIST, FILTER_DATA_LIST, SHOW_HOURLY, SET_SORT_BY, SET_MIN_VALUE, SET_ERROR, SET_SEARCH_TERM, RESET } from "../constants/action-types";
import axios from 'axios';

export function getDataList(endpoint) {
  return function(dispatch) {
    return axios.get(endpoint)
      .then(res => {
        dispatch({ type: GET_DATA_LIST, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: SET_ERROR, payload: err.response.data });
      })
  }
}

export function filterDataList() {
  return { type: FILTER_DATA_LIST }
}

export function setShowEvents() {
  return { type: SHOW_EVENTS };
}

export function setShowStats() {
  return { type: SHOW_STATS };
}

export function setShowHourly(bool) {
  return { type: SHOW_HOURLY, payload: bool };
}

export function setSortBy(value) {
  return { type: SET_SORT_BY, payload: value };
}

export function setMinValue(type, value) {
  return { type: SET_MIN_VALUE, payload: { type, value } };
}

export function setSearchTerm(value) {
  return { type: SET_SEARCH_TERM, payload: value };
}

export function reset() {
  return { type: RESET };
}