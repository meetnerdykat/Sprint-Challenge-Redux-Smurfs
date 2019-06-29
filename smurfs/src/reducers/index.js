/*
  Be sure to import in all of the action types from `../actions`
*/
import { REDUX_FETCH_SMURF } from '../actions';

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
  smurf: [],
  redux_fetch_smurf: false,
  error: ''
};

/*
  DONE - You'll only need one smurf reducer for this project. 

  DONE - Feel free to export it as a default and import as rootReducer. 
  
  OKAY - This will guard your namespacing issues.

  OKAY - There is no need for 'combineReducers' in this project.

  OKAY - Components can then read your store as, `state` and not `state.fooReducer`.
*/

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case REDUX_FETCH_SMURF:
      return {
        ...state
      };
    default:
      return state;
  }
}

export default reducer;
