import React from "react";
import styled from "styled-components";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useTypedSelector";
import { colors, breakpoints } from "../../constants/helper";

import Icon from "../atoms/Icon";
import PlayButton from "./PlayButton";

interface MediaData {
  id: string;
  title: string;
  path: string;
  published_year: number;
  category: string;
  rating: string;
  is_trending: boolean;
  is_recommended: boolean;
}

interface PropsType {
  data: {
    id: string;
    title: string;
    path: string;
    published_year: number;
    category: string;
    rating: string;
    is_trending: boolean;
    is_recommended: boolean;
  };
}

const CardWrapper = styled.li`
  > figure {
    overflow: hidden;
    border-radius: 8px;
    position: relative;

    &:before {
      position: absolute;
      content: "";
      background-color: ${colors.darkBlue};
      opacity: 0;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      transition: all 0.3 ease-in-out;
    }

    > img {
      width: 100%;
      height: 100%;
      // object-fit: cover;
    }

    &:hover {
      .play-button {
        z-index: 2;
      }
      &:before {
        opacity: 0.5;
      }
    }

    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }

    .bookmark-button {
      position: absolute;
      top: 16px;
      right: 24px;
      background-color: rgba(16, 20, 30, 0.5);
      padding: 8px 10px;
      border-radius: 80px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      z-index: 5;

      &:hover {
        background-color: ${colors.white};
        > svg {
          color: ${colors.darkBlue};
        }
      }
      > svg {
        color: ${colors.white};
      }
    }
  }

  > figcaption {
    margin-top: 8px;

    > p {
      font-size: 15px;
      color: ${colors.white};
      opacity: 0.75;
      font-weight: 300;

      @media (max-width: ${breakpoints.bpLgMobile}px) {
        font-size: 12px;
      }

      span {
        text-transform: capitalize;
        margin: 0 8px;

        > svg {
          margin-right: 5px;
        }
      }
    }

    h2 {
      text-transform: capitalize;
      color: ${colors.white};
      font-size: 18px;
      font-weight: 500;
      line-height: 30px;

      @media (max-width: ${breakpoints.bpLgMobile}px) {
        font-size: 15px;
        line-height: 19px;
        margin-top: 4px;
      }
    }
  }
`;
const ListingCard: React.FC<PropsType> = ({ data }) => {
  const { toggleBookmark } = useActions();

  const isBookmarked = useSelector((state) =>
    state.bookmarks.bookmarkedMedia.some((item) => {
      return item.id === data.id;
    })
  );

  const onToggleBookmarkHandler = (data: MediaData) => {
    toggleBookmark(data);
  };

  return (
    <CardWrapper>
      <figure>
        <button
          className='bookmark-button'
          onClick={() => onToggleBookmarkHandler(data)}
        >
          <Icon
            icon={isBookmarked ? "icon-bookmark-full" : "icon-bookmark-empty"}
            size={15}
          />
        </button>

        <img
          src={`/assets/images/${data.path}/regular/large.jpg`}
          alt={`${data.path}`}
        />

        <PlayButton />
      </figure>

      <figcaption>
        <p>
          {data.published_year} &#8226;{" "}
          <span>
            <Icon icon='icon-category-movie' size={12} />
            {data.category}
          </span>
          &#8226;
          <span>{data.rating}</span>
        </p>
        <h2>{data.title}</h2>
      </figcaption>
    </CardWrapper>
  );
};

export default ListingCard;
