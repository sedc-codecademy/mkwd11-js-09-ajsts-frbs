import { Types } from 'mongoose';
import { Movie } from '../mongo/movies.schema';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export interface IMovie {
  id: string;
  name: string;
  genre: string;
  director: string;
  imageUrl: string;
}

export interface MovieCreateProps {
  name: string;
  genre: string;
  director: string;
  imageUrl: string;
}

export interface MovieUpdateProps {
  name: string;
  genre: string;
  director: string;
  imageUrl: string;
}

export interface IMoviesService {
  getMovies(): Promise<IMovie[]>;
  saveMovie(props: MovieCreateProps): Promise<string>;
  deleteMovie(id: string): Promise<string>;
  updateMovie(id: string, props: MovieUpdateProps): Promise<string>;
}

// MONGO
export type RawMovieDocument = Document<unknown, {}, Movie> &
  Omit<
    Movie & {
      _id: Types.ObjectId;
    },
    never
  >;

// DTOS
export class MovieDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  genre: string;
  @ApiProperty()
  director: string;
  @ApiProperty()
  imageUrl: string;
}

export class UpdateMovieDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  genre: string;
  @ApiProperty()
  director: string;
  @ApiProperty()
  imageUrl: string;
}
