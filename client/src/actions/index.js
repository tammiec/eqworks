import axios from 'axios';

import { GET_HOURLY_EVENTS, GET_HOURLY_STATS, FILTER_HOURLY_STATS, SHOW_EVENTS, SHOW_STATS } from "../constants/action-types";

export function getHourlyStats() {
  return function(dispatch) {
    return axios.get('http://localhost:5555/stats/hourly')
      .then(res => {
        // console.log('res', res.data);
        const payload = res.data.map(row => {
          return {
            date: row.date.slice(0, 10),
            time: `${row.hour}:00`,
            location: row.location,
            impressions: row.impressions,
            clicks: row.clicks,
            revenue: parseFloat(row.revenue)
          }
        });
        // console.log('payload:', payload)
        dispatch({ type: GET_HOURLY_STATS, payload });
      });
  };
};

export function getHourlyEvents() {
  return function(dispatch) {
    return axios.get('http://localhost:5555/events/hourly')
      .then(res => {
        console.log('res', res.data);
        const payload = res.data.map(row => {
          return {
            date: new Date(row.date).toLocaleDateString(),
            time: row.hour,
            location: row.location,
            events: row.events
          }
        });
        dispatch({ type: GET_HOURLY_EVENTS, payload });
      });
  };
};

export function filterHourlyStats(searchTerm) {
  return { type: FILTER_HOURLY_STATS, payload: searchTerm }
}

export function setShowEvents() {
  return { type: SHOW_EVENTS };
}

export function setShowStats() {
  return { type: SHOW_STATS };
}