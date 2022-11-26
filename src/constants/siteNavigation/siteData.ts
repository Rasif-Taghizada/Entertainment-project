import Dashboard from "../../screens/Dashboard";
import Movie from "../../screens/Movie";
import TVSeries from "../../screens/TVSeries";
import Favourite from "../../screens/Favourite";

export const siteData = [
  {
    icon: "icon-nav-home",
    link: "/dashboard",
    element: Dashboard,
  },
  {
    icon: "icon-nav-movies",
    link: "/movie",
    element: Movie,
  },
  {
    icon: "icon-nav-tv-series",
    link: "/tv",
    element: TVSeries,
  },
  {
    icon: "icon-nav-bookmark",
    link: "/favourite",
    element: Favourite,
  },
  {
    icon: "icon-search",
    link: "/search",
  },
];
