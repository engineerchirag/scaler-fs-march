import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MovieList from './pages/MovieList';
import TheatreList from './pages/TheatreList';
import ShowsList from './pages/ShowList';
import MovieDetail from './pages/MovieDetail';
import Theatres from './pages/Theatres';
import ShowPage from './pages/ShowDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/movie/:movieId/theatres/:theatreId/shows/:showId" element={<ShowPage />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/movie/:movieId/theatres" element={<Theatres />} />

          <Route path="/admin/movies" element={<MovieList />} />
          <Route path="/admin/theatres" element={<TheatreList />} />
          <Route path="/admin/theatres/:theatreId/shows" element={<ShowsList />} />

          <Route path="/owner/theatres" element={<TheatreList />} />
          <Route path="/owner/theatres/:theatreId/shows" element={<ShowsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
