import React from "react";
import styled from "styled-components";

import { colors, breakpoints } from "../../constants/helper";
import ListingCard from "../molecules/ListingCard";

interface PropsType {
  title?: string;
  data: {
    id: string;
    title: string;
    path: string;
    published_year: number;
    category: string;
    rating: string;
    is_trending: boolean;
    is_recommended: boolean;
  }[];
}

const CardListingWrapper = styled.section`
  > h2 {
    font-size: 32px;
    font-weight: 300;
    line-height: 40px;
    letter-spacing: -0.5px;
    color: ${colors.white};
    margin-bottom: 25px;

    @media (max-width: ${breakpoints.bpLgMobile}px) {
      font-size: 20px;
      margin-bottom: 24px;
    }
  }

  .no-data {
    margin: 20px 0;
    color: ${colors.white};
    opacity: 0.5;
    text-align: center;
  }
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  > li {
    margin-bottom: 32px;
    width: 25%;
    padding-right: 40px;

    @media (max-width: ${breakpoints.bpTablet}px) {
      width: 33.33%;
      padding-right 25px;
    }

    @media (max-width: ${breakpoints.bpLgMobile}px) {
      width: 50%;
      padding-right 15px;
    }
  }
`;

const CardListing: React.FC<PropsType> = ({ title, data }) => {
  return (
    <CardListingWrapper>
      {title && <h2>{title}</h2>}
      {data.length ? (
        <List>
          {data.map((item) => {
            return <ListingCard key={item.id} data={item} />;
          })}
        </List>
      ) : (
        <div className='no-data'>List is empty, start adding some!</div>
      )}
    </CardListingWrapper>
  );
};

export default CardListing;
