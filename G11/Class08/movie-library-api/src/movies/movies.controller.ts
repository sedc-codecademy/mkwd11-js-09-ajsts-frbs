import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieDto, UpdateMovieDto } from './types/movies.types';
import { toMovieCreateProps, toMovieUpdateProps } from './utils/movie.mapper';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async getMovies() {
    const movies = await this.moviesService.getMovies();

    return movies;
  }

  @Post()
  async createMovie(@Body() movieDto: MovieDto) {
    const movieCreateProps = toMovieCreateProps(movieDto);

    const id = await this.moviesService.saveMovie(movieCreateProps);

    return {
      message: 'Success',
      id: id,
    };
  }

  @Delete(':id')
  async deleteMovie(@Param('id') id: string) {
    const deletedId = await this.moviesService.deleteMovie(id);

    return {
      message: 'Success deleted.',
      id: deletedId,
    };
  }

  @Put(':id')
  async updateMovie(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    const movieUpdateProps = toMovieUpdateProps(updateMovieDto);

    const updatedId = await this.moviesService.updateMovie(
      id,
      movieUpdateProps,
    );

    return {
      message: 'Success update.',
      id: updatedId,
    };
  }
}
