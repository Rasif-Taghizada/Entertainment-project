import React from "react";
import styled from "styled-components";
import { colors, breakpoints } from "../../constants/helper";

import Icon from "../atoms/Icon";

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.25);
  border: none;
  display: flex;
  align-items: center;
  padding: 12px 24px 12px 12px;
  border-radius: 26px;
  cursor: pointer;

  @media (max-width: ${breakpoints.bpLgMobile}px) {
    padding: 6px 12px 6px 6px;
  }

  > span {
    margin-left: 19px;
    font-size: 18px;
    font-weight: 500;
    color: ${colors.white};

    @media (max-width: ${breakpoints.bpLgMobile}px) {
      font-size: 14px;
    }
  }

  > svg {
    color: ${colors.white};

    @media (max-width: ${breakpoints.bpLgMobile}px) {
      width: 20px !important;
      height: 20px !important;
    }
  }
`;

const PlayButton: React.FC = () => {
  return (
    <Button className='play-button'>
      <Icon icon='icon-play' size={30} />
      <span> Play </span>
    </Button>
  );
};

export default PlayButton;
