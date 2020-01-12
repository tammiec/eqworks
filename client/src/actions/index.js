import { GET_HOURLY_EVENTS, GET_HOURLY_STATS, FILTER_HOURLY_STATS, SHOW_EVENTS, SHOW_STATS, GET_DATA_LIST, FILTER_DATA_LIST } from "../constants/action-types";
import axios from 'axios';

console.log('axios defaults', axios.defaults);

// export function getHourlyStats() {
//   return function(dispatch) {
//     return axios.get('/stats/hourly')
//       .then(res => {
//         // console.log('res', res.data);
//         const payload = res.data.map(row => {
//           return {
//             date: row.date.slice(0, 10),
//             time: `${row.hour}:00`,
//             location: row.location,
//             impressions: row.impressions,
//             clicks: row.clicks,
//             revenue: parseFloat(row.revenue)
//           }
//         });
//         // console.log('payload:', payload)
//         dispatch({ type: GET_HOURLY_STATS, payload });
//       });
//   };
// };

// export function getHourlyEvents() {
//   return function(dispatch) {
//     return axios.get('/events/hourly')
//       .then(res => {

//         console.log('res', res.data);
//         const payload = res.data.map(row => {
//           return {
//             date: new Date(row.date).toLocaleDateString(),
//             time: row.hour,
//             location: row.location,
//             events: row.events
//           }
//         });
//         dispatch({ type: GET_HOURLY_EVENTS, payload });
//       });
//   };
// };

export function getDataList(endpoint) {
  return function(dispatch) {
    return axios.get(endpoint)
      .then(res => {
        // console.log(res.data);
        const payload = res.data.map(row => {
          return {...row,
            date: row.date.slice(0, 10),
            time: `${row.hour}:00`,
            location: row.location
          }
        });
        // console.log('payload:', payload)
        dispatch({ type: GET_DATA_LIST, payload });
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