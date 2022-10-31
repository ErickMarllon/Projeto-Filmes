const moviePlay = import.meta.env.VITE_API_MOVIE;
import { Play } from "../style/MovieCardStyle";
const MovieCardPlay = ({ movie }) => {
  return (
    <Play>
 
      <iframe src="https://www.youtube.com/embed/zE7PKRjrid4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Play>
  );
};

export default MovieCardPlay;
