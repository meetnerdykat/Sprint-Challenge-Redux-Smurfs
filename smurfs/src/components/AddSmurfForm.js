import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { redux_add_smurf } from '../actions';

class AddSmurfForm extends Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      occupation: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
      occupation: this.state.occupation
    };

    // Call action
    this.props.redux_add_smurf(smurf);
  }

  render() {
    return (
      <div>
        <h3 className="bg-danger py-4 mb-4 text-light">Add A Smurf</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group row mb-3 mx-2">
            <div className="col-sm-12 col-md-6 offset-md-3">
              <div className="input-group input-group-lg mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text bg-danger border-0 text-white"
                    id="inputGroup-sizing-lg"
                  >
                    Name
                  </span>
                </div>
                <input
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  value={this.state.name}
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>

              <div className="input-group input-group-lg mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text bg-danger border-0 text-white"
                    id="inputGroup-sizing-lg"
                  >
                    Age
                  </span>
                </div>
                <input
                  type="text"
                  name="age"
                  onChange={this.onChange}
                  value={this.state.age}
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>

              <div className="input-group input-group-lg mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text bg-danger border-0 text-white"
                    id="inputGroup-sizing-lg"
                  >
                    Height
                  </span>
                </div>
                <input
                  type="text"
                  name="height"
                  onChange={this.onChange}
                  value={this.state.height}
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>

              <div className="input-group input-group-lg mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text bg-danger border-0 text-white"
                    id="inputGroup-sizing-lg"
                  >
                    Occupation
                  </span>
                </div>
                <input
                  type="text"
                  name="occupation"
                  onChange={this.onChange}
                  value={this.state.occupation}
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>
              <button className="btn btn-danger py-1 px-5" type="submit">
                Submit
              </button>
              {/* end of column div directly below this comment */}
            </div>
          </div>
        </form>

        {/* <form className="pb-4" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label
              className="bg-primary px-3 text-light rounded"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>

          <div>
            <label className="bg-primary px-3 text-light rounded" htmlFor="age">
              Age:
            </label>

            <input name="age" onChange={this.onChange} value={this.state.age} />
          </div>

          <div>
            <label
              className="bg-primary px-3 text-light rounded"
              htmlFor="height"
            >
              Height:
            </label>

            <input
              name="height"
              onChange={this.onChange}
              value={this.state.height}
            />
          </div>
          <div>
            <label
              className="bg-primary px-3 text-light rounded"
              htmlFor="occupation"
            >
              Occupation:
            </label>
            <input
              name="occupation"
              onChange={this.onChange}
              value={this.state.occupation}
            />
          </div>
          <br />
          <button className="btn btn-danger py-1 px-5" type="submit">
            Submit
          </button>
        </form> */}
      </div>
    );
  }
}

AddSmurfForm.propTypes = {
  redux_add_smurf: PropTypes.func.isRequired
};

export default connect(
  null,
  { redux_add_smurf }
)(AddSmurfForm);
