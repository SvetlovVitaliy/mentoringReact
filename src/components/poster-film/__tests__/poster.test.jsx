import React from 'react';
import { shallow } from 'enzyme';

import { Poster } from '../poster';
import { FilmInfo } from '../film-info';
import { YearFilm } from '../year-film';
import { PosterWrapper } from '../poster-wrapper';

describe('poster', () => {
  describe('snapshot', () => {
    const mockMovie = {
      poster_path: 'poster_path',
      genres: ['Action'],
      title: 'title',
      release_date: '2018',
      id: 1,
    };
    const mockQueryParams = ['123', '456'];

    it('poster component', () => {
      const component = shallow(<Poster movie={mockMovie} queryString={mockQueryParams} />);

      expect(component).toMatchSnapshot();
    });

    it('film info component', () => {
      const component = shallow(<FilmInfo title={mockMovie.title} gengre={mockMovie.genres[0]} year={mockMovie.release_date} />);

      expect(component).toMatchSnapshot();
    });

    it('year film component', () => {
      const component = shallow(<YearFilm year={mockMovie.release_date} />);

      expect(component).toMatchSnapshot();
    });

    it('poster wrapper component', () => {
      const component = shallow(
        <PosterWrapper
          id={1}
          queryString={mockQueryParams}
          genres={mockMovie.genres}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });
});