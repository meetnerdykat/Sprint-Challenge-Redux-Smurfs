import React from 'react';
import { connect } from 'react-redux';
import { redux_fetch_smurf } from '../actions';

const SmurfList = props => {
  const fetchSmurf = e => {
    e.preventDefault();
    props.redux_fetch_smurf();
  };

  return (
    <div>
      <h1 className="mt-5 mb-2">Welcome to the Village</h1>
      {/* {props.isFetching && <p>Fetching your Smurf</p>} */}

      {props.smurfs.map(smurf => (
        <div className="d-flex justify-content-center">
          <div
            key="{smurf.id}"
            className="card border-secondary rounded-lg mb-3"
            style={{ width: '540px' }}
          >
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={smurf.thumbnail}
                  className="card-img"
                  alt={smurf.thumbnail}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body text-dark p-0">
                  <div className="card-header text-left">
                    <h5 className="mb-0">{smurf.name}</h5>
                  </div>
                  <div className="card-text p-4 text-left">
                    <p>age: {smurf.age}</p>
                    <p>height: {smurf.height}</p>
                    <p>occupation: {smurf.occupation}</p>
                  </div>
                </div>
              </div>

              {/*  */}
              {/* <div
                  key={smurf.id}
                  className="card mb-3 border-0 text-primary bg-white"
                >
                  <div className="card-header bg-danger text-white font-weight-bold">
                    Smurf Bio
                  </div>
                  <div className="card-body">
                    <span style={{ fontWeight: 'bold' }}>name:</span>{' '}
                    {smurf.name}
                    <br />
                    <span style={{ fontWeight: 'bold' }}>age:</span> {smurf.age}
                    <br />
                    <span style={{ fontWeight: 'bold' }}>height:</span>{' '}
                    {smurf.height}
                    <br />
                    <span style={{ fontWeight: 'bold' }}>occupation:</span>{' '}
                    {smurf.occupation}
                  </div>
                </div> */}
              {/*  */}
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
