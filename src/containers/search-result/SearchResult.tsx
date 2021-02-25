import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IProductDetails } from "../../redux/interfaces/SearchEntitles";
import { AppState } from "../../redux/store";
import SearchBox from "../../components/search-box/SearchBox";
import searchEmpty from "../../assets/images/search_empty.png";
import searchLoading from "../../assets/images/loading.png";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../../components/product-card/ProductCard";
import './SearchResult.css';
// this container is responsible for the page given to be designed. The name container suggests combination of components not redux containers.

const SearchResult = () => {
  // Since the api given cant handle the search functionality filtering search in client side. thats why using local states.
  // As those filtered states are local to this page only and not required to store in store.
  // Also to demonstrate that redux flow can have both the store and local state.
  const searchEntitles = useSelector((state: AppState) => state.searchEntitles);
  const [filteredProducts, setFilteredProducts] = useState<IProductDetails[]>(
    []
  );
  useEffect(() => {
    if (searchEntitles) {
      let allProducts: IProductDetails[] = [];
      searchEntitles.searchEntitles.forEach((element) => {
        allProducts = [...allProducts, ...element.productDetails];
      });
      setFilteredProducts(allProducts);
    }
  }, [searchEntitles]);

  return (
    <div className="container-fluid">
      <SearchBox setFilteredData={setFilteredProducts} />
      <div className="search-results">
      <Col xs={12} sm={12} md={12} lg={12}>
        <Row>
          {searchEntitles.searchEntitles.length > 0 ? (
            filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Col md={6} lg={4} sm={12}>
                  <ProductCard productDetails={product} />
                </Col>
              ))
            ) : (
              <div className="search-empty">
                <img
                  src={searchEmpty}
                  className="search-empty-image"
                  alt="interview"
                />
                <span className="search-empty-text">
                  Oops, we couldn’t find any <br />
                  search results
                </span>
              </div>
            )
          ) : (
            <div className="search-loading">
              <img src={searchLoading} alt="interview" />
            </div>
          )}
        </Row>
      </Col>
      </div>
    </div>
  );
};
export default SearchResult;
