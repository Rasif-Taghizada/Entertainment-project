import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors, breakpoints } from "../../constants/helper";
import { siteData } from "../../constants/siteNavigation";

//atoms
import Icon from "../atoms/Icon";

//molecules
import GlobalSearch from "../molecules/GlobalSearch";

const ContentWrapper = styled.section`
  height: 100%;
  margin-top: 50px;

  @media (max-width: ${breakpoints.bpTablet}px) {
    margin-top: 128px;
  }

  @media (max-width: ${breakpoints.bpLgMobile}px) {
    margin-top: 80px;
  }

  > aside {
    width: 100%;
    overflow: hidden;
    padding-left: 190px;

    @media (max-width: ${breakpoints.bpTablet}px) {
      padding-left: 25px;
    }
  }
`;

const Content = styled.aside`
  .global-search {
    margin-bottom: 34px;

    @media (max-width: ${breakpoints.bpTablet}px) {
      margin-bottom: 24px;
    }
  }
`;

const SideNavWrapper = styled.nav`
  border-radius: 20px;
  padding: 35px 32px;
  background-color: ${colors.semiDarkBlue};
  text-align: center;
  position: fixed;
  top: 32px;
  bottom: 32px;
  left: 32px;
  z-index: 10;

  @media (max-width: ${breakpoints.bpTablet}px) {
    display: flex;
    top: 0;
    left: 25px;
    right: 25px;
    top: 23px;
    height: 75px;
    align-items: center;
  }

  @media (max-width: ${breakpoints.bpLgMobile}px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 0;
  }

  > svg {
    margin-bottom: 75px;

    @media (max-width: ${breakpoints.bpTablet}px) {
      margin-bottom: 0;
    }

    @media (max-width: ${breakpoints.bpLgMobile}px) {
      height: 20px !important;
      width: 25px !important;
    }
  }

  > a {
    display: block;
    margin-bottom: 40px;
    color: ${colors.greyishBlue};

    @media (max-width: ${breakpoints.bpTablet}px) {
      margin-bottom: 0;
      margin-right: 32px;

      &:first-of-type {
        margin-left: auto;
      }

      &:last-of-type {
        margin-right: auto;
      }
    }

    @media (max-width: ${breakpoints.bpLgMobile}px) {
      margin-right: 24px;

      > svg {
        height: 16px !important;
        width: 16px !important;
      }
    }

    &.active {
      color: ${colors.white};
    }

    &:hover {
      color: ${colors.red};
    }
  }
`;

const SideNav: React.FC = () => {
  return (
    <ContentWrapper>
      <SideNavWrapper>
        <Icon icon='logo' size={32} color={colors.red} />

        {siteData.map((nav) => {
          return (
            <NavLink to={nav.link} key={nav.link}>
              <Icon icon={nav.icon} size={20} />
            </NavLink>
          );
        })}
      </SideNavWrapper>
      ;
      <Content>
        <GlobalSearch />
        <Outlet />
      </Content>
    </ContentWrapper>
  );
};

export default SideNav;
