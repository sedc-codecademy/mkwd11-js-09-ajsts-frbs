import {
  IMovie,
  MovieCreateProps,
  MovieDto,
  MovieUpdateProps,
  RawMovieDocument,
  UpdateMovieDto,
} from '../types/movies.types';

// MAPPER FUNCTION
export const toMovies = (rawMovies: RawMovieDocument[]) => {
  const movies: IMovie[] = rawMovies.map((value) => ({
    id: value._id.toString(),
    name: value.name,
    genre: value.genre,
    director: value.director,
    imageUrl: value.imageUrl,
  }));

  return movies;
};

export const toMovieCreateProps = (movieDto: MovieDto): MovieCreateProps => {
  return {
    name: movieDto.name,
    genre: movieDto.genre,
    director: movieDto.director,
    imageUrl: movieDto.imageUrl,
  };
};

export const toMovieUpdateProps = (
  movieUpdateDto: UpdateMovieDto,
): MovieUpdateProps => {
  return {
    name: movieUpdateDto.name,
    genre: movieUpdateDto.genre,
    director: movieUpdateDto.director,
    imageUrl: movieUpdateDto.imageUrl,
  };
};
