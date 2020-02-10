import React from 'react';
import Item from './Item';
import './../styles/components/app.scss';
const SearchResults = () => (
  <ol
    id="searchResults"
    className="section search-results list-view stack search-results-core search-results-std list--has-row-logos "
    imgtype="listingLightweight"
  >
    <Item />
  </ol>
);

export default SearchResults;
