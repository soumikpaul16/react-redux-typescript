import { combineReducers } from 'redux';
import { getSearchEntitlesReducer } from './SearchEntitlesReducer';

const rootReducer = combineReducers({
    searchEntitles: getSearchEntitlesReducer
});

export default rootReducer;