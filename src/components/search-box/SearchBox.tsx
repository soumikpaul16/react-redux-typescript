import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { IProductDetails } from "../../redux/interfaces/SearchEntitles";
import searchIcon from "../../assets/images/search_icon.png";
import './SearchBox.css';
// the responsibility of the search box is to search from the api dump provided based on category.

const SearchBox: React.FC<{ setFilteredData: Function }> = ({
  setFilteredData,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchBoxRef = useRef("");
  const searchEntitles = useSelector((state: AppState) => state.searchEntitles);
  //just to show how using store we can get the global data anywhere else we can pass also as props the whole data.

  const searchCampaignByName = (term: string) => {
    const filteredData: IProductDetails[] = [];
    if (term.trim() !== "") {
      searchEntitles.searchEntitles.forEach((data) => {
        if (data.categoryDetails.slug.toLowerCase().indexOf(term) !== -1) {
          filteredData.push(...data.productDetails);
        }
      });
      setFilteredData(filteredData);
    } else {
      let allProducts: IProductDetails[] = [];
      searchEntitles.searchEntitles.forEach((element) => {
        allProducts = [...allProducts, ...element.productDetails];
      });
      setFilteredData(allProducts);
    }
  };

  const onSearch = (evt: any) => {
    setSearchTerm(evt.target.value);
    let value = evt.target.value;
    //debounce block
    searchBoxRef.current = value;
    setTimeout(() => {
      if (searchBoxRef.current === value) {
        searchCampaignByName(value);
      }
    }, 500);
    //dbounce block
  };

  return (
    <div className="search-header">
      <div className="search-content">
        <img src={searchIcon} className="search-icon" alt="interview"/>
        <input
          type="text"
          className="search-type"
          placeholder="Search by category"
          value={searchTerm}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default SearchBox;
