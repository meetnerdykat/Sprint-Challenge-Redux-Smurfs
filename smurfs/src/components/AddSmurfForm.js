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
      <div className="bg-light text-dark">
        <h2 className="bg-danger py-4 mb-4 text-light">Add A Smurf</h2>
        <form className="pb-4" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label
              className="bg-primary px-3 text-light rounded"
              htmlFor="name"
            >
              Name:
            </label>
            <br />
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <br />
          <div>
            <label className="bg-primary px-3 text-light rounded" htmlFor="age">
              Age:
            </label>
            <br />
            <input name="age" onChange={this.onChange} value={this.state.age} />
          </div>
          <br />
          <div>
            <label
              className="bg-primary px-3 text-light rounded"
              htmlFor="height"
            >
              Height:
            </label>
            <br />
            <input
              name="height"
              onChange={this.onChange}
              value={this.state.height}
            />
          </div>
          <br />
          <div>
            <label
              className="bg-primary px-3 text-light rounded"
              htmlFor="occupation"
            >
              Occupation:
            </label>
            <br />
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
        </form>
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
