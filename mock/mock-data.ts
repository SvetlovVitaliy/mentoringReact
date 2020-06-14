import { TSortType } from '../src/components/sorting-block/types';
import { TMovie } from '../src/components/search/types';

export const mockSortButton = [
  {
    id: 'release_date',
    title: TSortType.RELEASE_DATE,
  },
  {
    id: 'rating',
    title: TSortType.RATING,
  },
];

export const mockMovies = [1, 2, 3, 4, 5];

export const mockSearchButton = [
  {
    id: 'title',
    title: TMovie.TITLE,
  },
  {
    id: 'gengre',
    title: TMovie.GENGRE,
  },
];