import React from "react";
import Slick, { Settings } from "react-slick";
import styled from "styled-components";
import { colors, breakpoints } from "../../constants/helper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselCard from "../molecules/CarouselCard";

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

const CarouselWrapper = styled.div`
  width: 120%;

  @media (max-width: ${breakpoints.bpTablet}px) {
    width: 200%;
  }

  @media (max-width: ${breakpoints.bpLgMobile}px) {
    width: 220%;
  }

  > h2 {
    font-size: 32px;
    font-weight: 300;
    line-height: 40px;
    letter-spacing: -0.5px;
    color: ${colors.white};
    margin-bottom: 25px;

    @media (max-width: ${breakpoints.bpLgMobile}px) {
      font-size: 20px;
      margin-bottom: 16px;
    }
  }
`;

const Carousel: React.FC<PropsType> = ({ title, data }) => {
  const slickSettings: Settings = {
    swipeToSlide: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    className: "slider",
  };

  const renderItems = () => {
    return data.map((media) => <CarouselCard key={media.id} data={media} />);
  };

  return (
    <CarouselWrapper>
      {title && <h2>{title}</h2>}
      <Slick {...slickSettings}>{renderItems()}</Slick>
    </CarouselWrapper>
  );
};

export default Carousel;
