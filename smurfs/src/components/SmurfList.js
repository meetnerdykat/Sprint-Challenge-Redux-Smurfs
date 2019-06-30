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
        <div className="col-md-6 offset-md-3">
          <div
            key={smurf.id}
            className="card border-0 text-primary m-5 bg-white"
          >
            <div className="card-header bg-danger text-white font-weight-bold">
              Smurf Bio
            </div>
            <div className="card-body">
              <span style={{ fontWeight: 'bold' }}>name:</span> {smurf.name}
              <br />
              <span style={{ fontWeight: 'bold' }}>age:</span> {smurf.age}
              <br />
              <span style={{ fontWeight: 'bold' }}>height:</span> {smurf.height}
              <br />
              <span style={{ fontWeight: 'bold' }}>occupation:</span>{' '}
              {smurf.occupation}
            </div>
          </div>
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
