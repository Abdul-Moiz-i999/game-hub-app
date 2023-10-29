import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres } = useGenres();
  return (
    <ul>
      {genres.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
