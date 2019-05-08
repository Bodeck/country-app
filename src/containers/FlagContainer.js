import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/FlagList';
import { getCountries } from '../actions/countries';

class CountryFlagContainer extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getCountries());
  }

  render() {
    return (
      <div>
        <CountryFlagList countries={this.props.countries}/>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    countries: store.countriesReducer.countries
  };
};

export default connect(mapStateToProps)(CountryFlagContainer);