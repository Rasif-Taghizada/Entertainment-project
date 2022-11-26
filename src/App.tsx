import React, { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//component
import SideNav from "./components/organisms/SideNav";

//screen
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Movie from "./screens/Movie";
import TVSeries from "./screens/TVSeries";
import Favourite from "./screens/Favourite";
import Search from "./screens/Search";
const App: React.FC = () => {
  const { getMedia } = useActions();

  useEffect(() => {
    getMedia();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<SideNav />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/movie' element={<Movie />} />
          <Route path='/tv' element={<TVSeries />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='/search' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
