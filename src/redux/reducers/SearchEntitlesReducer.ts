import {
    GET_SEARCH_ENTITLES,
    GetSearchEntitlesStateType,
    SearchEntitlesActionTypes
  } from '../types/SearchEntitlesTypes';
  
  const initialStateGetSearchEntitles: GetSearchEntitlesStateType = {
    searchEntitles: []
  };
  
export const getSearchEntitlesReducer = (
    state = initialStateGetSearchEntitles,
    action: SearchEntitlesActionTypes
  ): GetSearchEntitlesStateType => {
    switch (action.type) {
      case GET_SEARCH_ENTITLES:
        return {
          ...state,
          searchEntitles: action.payload
        };
      default:
        return state;
    }
};