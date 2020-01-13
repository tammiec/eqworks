import { SHOW_EVENTS, SHOW_STATS, GET_DATA_LIST, FILTER_DATA_LIST } from "../constants/action-types";
import axios from 'axios';

export function getDataList(endpoint) {
  return function(dispatch) {
    return axios.get(endpoint)
      .then(res => {
        // console.log('payload:', res.data)
        dispatch({ type: GET_DATA_LIST, payload: res.data });
      })
  }
}

export function filterDataList(searchTerm) {
  return { type: FILTER_DATA_LIST, payload: searchTerm }
}

export function setShowEvents() {
  return { type: SHOW_EVENTS };
}

export function setShowStats() {
  return { type: SHOW_STATS };
}