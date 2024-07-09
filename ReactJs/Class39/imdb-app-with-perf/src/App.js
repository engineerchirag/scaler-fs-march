import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import {
  BrowserRouter,
  createBrowserRouter,
  Link,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Favourite from "./components/Favourite";
import React, { Suspense, useState } from "react";
import { useEffect } from "react";
import AddMovie from "./components/AddMovie";
// import TermsAndCondition from "./components/TermsAndCondition";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MovieList />,
//   },{
//     path: "/movie-detail",
//     element: <MovieDetail />,
//   },
// ]);

const LazyTnC = React.lazy(() => import('./components/TermsAndCondition'));

function App() {

  // const [TncPage, setTnCPage] = useState();

  // const loadTnCPage = () => {
  //   import('./components/TermsAndCondition').then((module) => setTnCPage(() => module.default));
  // }


  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
          {/* <ul>
              <li><Link to="/">Movies</Link></li>
              <li><Link to="/favourite">Favourite</Link></li>
              <li><Link to="/terms" onClick={loadTnCPage}>TnC</Link></li>
              <li>Add Movie</li>
          </ul> */}
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
          {/* <Route path="/terms" element={TncPage && <TncPage />} /> */}
          <Route path="/terms" element={<Suspense fallback="Loading..."> <LazyTnC /> </Suspense>} />
          <Route path="add-movie" element={<AddMovie />}></Route>
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
