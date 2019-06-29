// import axios from 'axios'
import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const REDUX_FETCH_SMURF_START = 'REDUX_FETCH_SMURF_START';
export const REDUX_FETCH_SMURF_SUCCESS = 'REDUX_FETCH_SMURF_SUCCESS';
export const REDUX_FETCH_SMURF_FAIL = 'REDUX_FETCH_SMURF_FAIL';

export const REDUX_ADD_SMURF_START = 'REDUX_ADD_SMURF_START';
export const REDUX_ADD_SMURF_SUCCESS = 'REDUX_ADD_SMURF_SUCCESS';
export const REDUX_ADD_SMURF_FAIL = 'REDUX_ADD_SMURF_FAIL';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const redux_fetch_smurf = () => dispatch => {
  // console.log('action');
  dispatch({
    type: REDUX_FETCH_SMURF_START
  });
  axios
    .get('http://localhost:3333/smurfs/')
    .then(res =>
      dispatch({ type: REDUX_FETCH_SMURF_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: REDUX_FETCH_SMURF_FAIL, payload: err }));
};

// export const redux_add_smurf = smurfData => dispatch => {
//   // console.log('action');
//   dispatch({
//     type: REDUX_ADD_SMURF_START
//   });
//   return axios
//     .post('http://localhost:3333/smurfs/')
//     .then(res =>
//       dispatch({ type: REDUX_ADD_SMURF_SUCCESS, payload: res.smurf })
//     )

//     .catch(err => dispatch({ type: REDUX_ADD_SMURF_FAIL, payload: err }));
// };

export const redux_add_smurf = smurfData => dispatch => {
  console.log('action');
  fetch('http://localhost:3333/smurfs/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(smurfData)
  })
    .then(res => res.json())
    .then(smurf => dispatch({ type: REDUX_ADD_SMURF_SUCCESS, payload: smurf }));
};
