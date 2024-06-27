import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Favourite from "./components/Favourite";
import { useState } from "react";
import { useEffect } from "react";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MovieList />,
//   },{
//     path: "/movie-detail",
//     element: <MovieDetail />,
//   },
// ]);

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <MovieList />
            }
          />
          <Route path="/movie-list" element={<Navigate to={"/"} />} />
          <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
          <Route
            path="/favourite"
            element={
              <Favourite />
            }
          />
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
