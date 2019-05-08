import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/countries';
import CountryDetails from '../presentational/CountryDetails';

class CountryDetailsContainer extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getCountry(this.props.params.id));
  }

  render() {
    return (
      <CountryDetails country={this.props.selectedCountry} />
    )
  }
};

const mapStateToProps = function(store) {
  return {
    selectedCountry: store.countriesReducer.selectedCountry
  };
};

export default connect(mapStateToProps)(CountryDetailsContainer);