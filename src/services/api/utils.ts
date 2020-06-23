export interface IMovie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: string[];
}

export interface IMoviesData {
  movieId: IMovie;
  moviesList: IMovie[];
}

export const initialState: IMoviesData = {
  movieId: {} as IMovie,
  moviesList: [],
}