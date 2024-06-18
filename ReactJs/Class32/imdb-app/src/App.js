import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

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
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie-list" element={<Navigate to={'/'} />} />
          <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
