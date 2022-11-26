import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useTypedSelector";
import { colors, breakpoints } from "../../constants/helper";

import Icon from "../atoms/Icon";

interface SuggestionsType {
  id: string;
  title: string;
  path: string;
  published_year: number;
  category: string;
  rating: string;
  is_trending: boolean;
  is_recommended: boolean;
}

const SearchWrapper = styled.div`
  display: flex;
  alignitems: center;
  position: relative;

  > svg {
    @media (max-width: ${breakpoints.bpLgMobile}px) {
      height: 24px !important;
      width: 24px !important;
    }
  }
`;

const Input = styled.input`
  font-size: 24px;
  margin-left: 28px;
  width: calc(100% - 80px);
  position: relative;
  transition: padding 0.3s ease-in-out;

  @media (max-width: ${breakpoints.bpLgMobile}px) {
    font-size: 16px;
  }

  &:focus {
    padding-bottom: 8px;
    border-bottom: 2px solid ${colors.semiDarkBlue};
  }
`;

const SuggestionList = styled.ul`
  list-style: none;
  border-radius: 8px;
  padding: 10px 0;
  position: absolute;
  background-color: ${colors.semiDarkBlue};
  top: calc(100% + 10px);
  left: 45px;
  z-index: 5;
  width: calc(100% - 80px);
  max-height: 300px;

  > li {
    color: ${colors.white};
    padding: 5px 10px;
    text-transform: capitalize;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      background-color: ${colors.white};
      color: ${colors.semiDarkBlue};
    }
  }
`;

const GlobalSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { setSearchResult } = useActions();
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState<SuggestionsType[]>([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const { movies, tv } = useSelector((state) => state.contents);

  const filterDataByTitle = (title: string, callback: any) => {
    const mediaData = [...movies, ...tv];
    let suggestionData: SuggestionsType[] = [];

    if (title.replace(/ /g, "")) {
      suggestionData = mediaData.filter((media) => {
        return media.title.indexOf(title) > -1;
      });
    }

    setSuggestions(suggestionData);

    if (callback) {
      callback(suggestionData);
    }
  };

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSearchText(value);
    filterDataByTitle(value, null);
    setShowSuggestion(true);
  };

  const onSuggestionClickHandler = (data: SuggestionsType) => {
    setSearchText(data.title);

    filterDataByTitle(data.title, (suggestions: any) => {
      setSearchResult({ query: data.title, data: suggestions });
    });

    navigate("/search");
    setShowSuggestion(false);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if ((event.key === "Enter" || event.key === "Go") && suggestions.length) {
      setSearchResult({ query: searchText, data: suggestions });
      setShowSuggestion(false);
      navigate("/search");
    }
  };

  return (
    <SearchWrapper className='global-search'>
      <Icon icon='icon-search' size={24} color={colors.white} />
      <Input
        // onFocus={onInputFocus}
        ref={inputRef}
        onKeyPress={onKeyDownHandler}
        value={searchText}
        onChange={onChangeHandler}
        className='styled-input'
        placeholder='Search for movies or TV series'
      />
      {suggestions.length && showSuggestion && (
        <SuggestionList>
          {suggestions.map((suggest) => {
            return (
              <li
                key={suggest.id}
                onClick={() => onSuggestionClickHandler(suggest)}
              >
                {suggest.title}
              </li>
            );
          })}
        </SuggestionList>
      )}
    </SearchWrapper>
  );
};

export default GlobalSearch;
