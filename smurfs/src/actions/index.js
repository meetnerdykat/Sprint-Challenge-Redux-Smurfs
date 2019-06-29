/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const REDUX_FETCH_SMURF = 'REDUX_FETCH_SMURF';

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

export function redux_fetch_smurf() {
  console.log('action');
  return {
    type: REDUX_FETCH_SMURF
  };
}
