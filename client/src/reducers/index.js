import { GET_HOURLY_EVENTS, GET_HOURLY_STATS, FILTER_HOURLY_STATS } from "../constants/action-types";

const initialState = {
  hourlyEvents: [],
  hourlyStats: [],
  filteredStats: [],
};

// const levenshtein = (searchTerm, source) => {
  
//   if (searchTerm.length === 0) {
//     return source.length;
//   }

//   if (source.length === 0) {
//     return searchTerm.length;
//   }

//   let matrix = [];
//   let i;
//   let j;

//   // increment along the first column of each row
//   for (i = 0; i <= source.length; i++){
//     console.log('matrix i:', matrix)
//     matrix[i] = [i];
//   }

//   // increment each column in the first row
//   for (j = 0; j <= searchTerm.length; j++){
//     console.log('matrix j:', matrix)
//     matrix[0][j] = j;
//   }

//   // Fill in the rest of the matrix
//   for (i = 1; i <= source.length; i++){
//     for (j = 1; j <= searchTerm.length; j++){
//       if(source.charAt(i - 1) === searchTerm.charAt(j - 1)){
//         matrix[i][j] = matrix[i - 1][j - 1];
//       } else {
//         matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
//           Math.min(matrix[i][j - 1] + 1, // insertion
//           matrix[i - 1][j] + 1)); // deletion
//       }
//     }
//   }

//   return matrix[source.length][searchTerm.length];

// };

function rootReducer(state = initialState, action) {
  
  if (action.type === GET_HOURLY_EVENTS) {
    return {...state, hourlyEvents: [...action.payload]};
  }

  if (action.type === GET_HOURLY_STATS) {
    return {...state, hourlyStats: [...action.payload], filteredStats: [...action.payload]};
  }

  if (action.type === FILTER_HOURLY_STATS) {
    const filteredStats = state.hourlyStats.filter(stat => {
      // console.log('lev', levenshtein(action.payload.toLowerCase(), stat.location.toLowerCase()));
      return stat.location.toLowerCase().includes(action.payload.toLowerCase());
    });
    return {...state, filteredStats: [...filteredStats] }
  }

  return state;
};

export default rootReducer;