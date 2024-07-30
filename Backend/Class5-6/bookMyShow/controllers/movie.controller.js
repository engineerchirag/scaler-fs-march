import Movie from "../model/movie.model.js";

// add movie
export const addMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const movieDetails = await newMovie.save();
    res.send({
      success: true,
      ...movieDetails,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

// get movie by Id
export const getMovieById = async (req, res) => {
  try {
    const movieDetails = await Movie.findById(req.params.movieId);
    res.send(movieDetails);
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

// get all movies
export const getAllMovie = async (req, res) => {
  try {
    const filter = {};
    const moviesDetails = await Movie.find(filter);
    res.send(moviesDetails);
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

// update movie

export const updateMovie = async (req, res) => {
  try {
    const updatedMovieDetails = await Movie.updateOne(
      { _id: req.params.movieId },
      { $set: req.body }
    );
    res.send(updatedMovieDetails);
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

// delete movie

export const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.movieId);
    res.send({
        success: true,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};
