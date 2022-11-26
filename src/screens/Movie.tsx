import React from "react";
import styled from "styled-components";
import { useSelector } from "../hooks/useTypedSelector";
import CardListing from "../components/organisms/CardListing";

const MovieContainer = styled.section``;
const Movie: React.FC = () => {
  const { movies } = useSelector((state) => state.contents);

  return (
    <MovieContainer>
      <CardListing data={movies} title='Movies' />
    </MovieContainer>
  );
};

export default Movie;
