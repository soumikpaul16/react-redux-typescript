import { ISearchEntitles } from '../interfaces/SearchEntitles';

export const GET_SEARCH_ENTITLES= 'GET_SEARCH_ENTITLES';

export interface GetSearchEntitlesStateType {
    searchEntitles: ISearchEntitles[];
}

interface GetSearchEntitlesActionType {
  type: typeof GET_SEARCH_ENTITLES;
  payload: ISearchEntitles[];
}
export type SearchEntitlesActionTypes = GetSearchEntitlesActionType;