import React from "react";
import styled from "styled-components";
import { useSelector } from "../hooks/useTypedSelector";
import CardListing from "../components/organisms/CardListing";

const TVContainer = styled.section``;

const TVSeries: React.FC = () => {
  const { tv } = useSelector((state) => state.contents);

  return (
    <TVContainer>
      <CardListing data={tv} title='TV Series' />
    </TVContainer>
  );
};

export default TVSeries;
