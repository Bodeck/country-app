export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY';
export const SET_CONTINENT = 'SET CONTINENT';

export function getCountries() {
  return {
    type: GET_COUNTRIES
  }
};

export function getCountry(id) {
  return {
    type: GET_COUNTRY,
    id
  }
};

export function deleteCountry(id) {
  return {
    type: DELETE_COUNTRY,
    id
  }
};

export function searchCountry(searchText) {
  return {
    type: SEARCH_COUNTRY,
    searchText
  }
};

export function setContinent(name) {
  return {
    type: SET_CONTINENT,
    name
  }
};