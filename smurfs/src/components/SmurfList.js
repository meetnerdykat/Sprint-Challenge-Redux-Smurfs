import React from 'react';
import { connect } from 'react-redux';
import { redux_fetch_smurf } from '../actions';

const SmurfList = props => {
  const fetchSmurf = e => {
    e.preventDefault();
    props.redux_fetch_smurf();
  };

  return (
    <div className="mt-5">
      <h1 className="mb-3">Welcome to the Village</h1>
      {/* {props.isFetching && <p>Fetching your Smurf</p>} */}

      {props.smurfs.map(smurf => (
        <div key={smurf.id} className="card text-light m-5 bg-secondary">
          {smurf.name}
          <br />
          {smurf.age}
          <br />
          {smurf.height}
          <br />
          {smurf.occupation}
        </div>
      ))}

      {props.error && <p className="error">{props.error}</p>}
      <button className="btn btn-danger mt-2 mb-5" onClick={fetchSmurf}>
        Fetch Smurf!
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { redux_fetch_smurf }
)(SmurfList);
