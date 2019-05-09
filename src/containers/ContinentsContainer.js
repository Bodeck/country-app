import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/countries';
import CountryFlagList from '../presentational/FlagList';

class ContinentsContainer extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  chooseContinent(event) {
    this.props.dispatch(setContinent(event.target.value));
  }

  deleteCountry(id) {
    this.props.dispatch(deleteCountry(id));
  }

  componentDidMount() {
    this.props.dispatch(setContinent('Europa'));
  }

  render() {
    return (
      <div>
        <select onChange={event => this.chooseContinent(event)} >
          <option value='Europa'>Europa</option>
          <option value='Afryka'>Afryka</option>
        </select>
        <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
      </div>
    )
  }
}

const mapStateToProps = function (store) {
  return {
    visibleCountries: store.countriesReducer.visibleCountries
  }
}

export default connect(mapStateToProps)(ContinentsContainer);