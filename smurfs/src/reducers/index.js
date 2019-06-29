/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  REDUX_FETCH_SMURF_START,
  REDUX_FETCH_SMURF_SUCCESS,
  REDUX_FETCH_SMURF_FAIL,
  REDUX_ADD_SMURF_START,
  REDUX_ADD_SMURF_SUCCESS,
  REDUX_ADD_SMURF_FAIL
} from '../actions';

/*
 OKAY - Your initial/default state for this project could,
 Although does not have to* look a lot like this

 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }

*/

const initialState = {
  smurfs: [],
  smurf: {},
  isFetching: false,
  error: ''
};

/*
  DONE - You'll only need one smurf reducer for this project. 

  DONE - Feel free to export it as a default and import as rootReducer. This will guard your namespacing issues.

  OKAY - There is no need for 'combineReducers' in this project.

  OKAY - Components can then read your store as, `state` and not `state.fooReducer`.
*/

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    // FETCH SMURF
    case REDUX_FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case REDUX_FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: true,
        error: ''
      };
    case REDUX_FETCH_SMURF_FAIL:
      return {
        ...state,
        isFetching: true,
        error: action.payload
      };
    // ADD SMURF
    case REDUX_ADD_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };

    case REDUX_ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: true,
        error: ''
      };
    case REDUX_ADD_SMURF_FAIL:
      return {
        ...state,
        isFetching: true,
        error: action.payload
      };

    default:
      return state;
  }
}

export default reducer;
