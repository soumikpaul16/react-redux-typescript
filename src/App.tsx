import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchResult from "./containers/search-result/SearchResult";
import { getSearchEntitles } from './redux/effects/SearchEntitles';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchEntitles());
  }, [dispatch]);
  // on load assuming to get all data at first load.
  // not putting in the Search Result page as to fetch this data we are not searching anything yet.
  // So assuming data to be loaded beforehand like on top layout.
  return <div className='App'><SearchResult /></div>;
};
export default App;
