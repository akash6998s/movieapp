import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import APIKey from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await MovieApi.get(
          `?i=tt3896198&apiKey=${APIKey}&s=${movieText}&type=movie`
        );
        dispatch(addMovies(response.data));
        console.log("The Response From API ", response);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, [dispatch, movieText]); // Include dependencies

  return (
    <div>
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
