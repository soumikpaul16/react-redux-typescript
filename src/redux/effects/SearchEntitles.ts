import { SearchEntitlesActionTypes } from '../types/SearchEntitlesTypes';
import { getSearchEntitlesAction } from '../actions/SearchEntitles';
import { Dispatch } from 'redux';

export const getSearchEntitles = () => {
  return function (dispatch: Dispatch<SearchEntitlesActionTypes>) {
    const FAKE_DATA_URL = 'https://api.npoint.io/559e22a5f259679392af';
    fetch(FAKE_DATA_URL, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        dispatch(getSearchEntitlesAction(data.searchEntities));
        return data.searchEntities;
      }).catch(err => {
        console.log(err)
      });
  };
};