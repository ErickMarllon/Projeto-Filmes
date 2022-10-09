const seriePlay = import.meta.env.VITE_API_MOVIES;

const SerieCardPlay = ({ tv }) => {
  return (
    <div className="movie-Play">
      <iframe src={seriePlay + tv} />
    </div>
  );
};

export default SerieCardPlay;
