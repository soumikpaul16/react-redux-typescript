import { GET_SEARCH_ENTITLES, SearchEntitlesActionTypes } from '../types/SearchEntitlesTypes';

import { ISearchEntitles } from '../interfaces/SearchEntitles';

export const getSearchEntitlesAction = (searchEntitles: ISearchEntitles[]): SearchEntitlesActionTypes => {
  return {
    type: GET_SEARCH_ENTITLES,
    payload: searchEntitles
  };
};