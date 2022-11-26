import React from "react";
import styled from "styled-components";
import { useSelector } from "../hooks/useTypedSelector";
import CardListing from "../components/organisms/CardListing";

const SearchContainer = styled.section``;

const Search: React.FC = () => {
  const { query, searchResults } = useSelector((state) => state.search);

  return (
    <SearchContainer>
      {searchResults.length && (
        <CardListing
          data={searchResults}
          title={`Found ${searchResults.length} result${
            searchResults.length > 1 ? "s" : ""
          } for '${query}'`}
        />
      )}
    </SearchContainer>
  );
};

export default Search;
