import React from "react";
import styled from "styled-components";
import { useSelector } from "../hooks/useTypedSelector";
import CardListing from "../components/organisms/CardListing";

const FavouriteContainer = styled.section``;

const Favourite: React.FC = () => {
  const bookmarkedMedia = useSelector(
    (state) => state.bookmarks.bookmarkedMedia
  );

  const bookmarkedMovies = bookmarkedMedia.filter(
    (media) => media.category.toLowerCase() !== "tv series"
  );

  const bookmarkedTV = bookmarkedMedia.filter(
    (media) => media.category.toLowerCase() !== "movie"
  );

  return (
    <FavouriteContainer>
      <CardListing data={bookmarkedMovies} title='Bookmarked Movies' />
      <CardListing data={bookmarkedTV} title='Bookmarked TV Series' />
    </FavouriteContainer>
  );
};

export default Favourite;
