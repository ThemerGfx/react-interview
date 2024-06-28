import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/moviesSlice";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import Filter from "./Filter";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);
  const filters = useSelector((state) => state.movies.filters);
  const currentPage = useSelector((state) => state.movies.currentPage);
  const itemsPerPage = useSelector((state) => state.movies.itemsPerPage);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  const filteredMovies = movies.filter(
    (movie) => filters.length === 0 || filters.includes(movie.category)
  );

  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div>
      {paginatedMovies.length !== 0 ? (
        <>
          <Filter />
          <div className="movie-list">
            {paginatedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <Pagination />
        </>
      ) : (
        <p>No movie to show, please refresh the page...</p>
      )}
    </div>
  );
};

export default MovieList;
