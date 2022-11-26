import React from "react";
import styled from "styled-components";
import { useSelector } from "../hooks/useTypedSelector";

import Carousel from "../components/organisms/Carousel";
import CardListing from "../components/organisms/CardListing";

const DashboardContainer = styled.section`
  > div {
    margin-bottom: 40px;
  }
`;

const Dashboard: React.FC = () => {
  const { recommended, trending, loading } = useSelector(
    (state) => state.contents
  );

  return (
    <DashboardContainer>
      {loading ? (
        <></>
      ) : (
        <>
          <Carousel data={trending} title='Trending' />
          <CardListing data={recommended} title='Recommended for you' />
        </>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
