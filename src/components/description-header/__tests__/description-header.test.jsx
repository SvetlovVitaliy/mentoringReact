import React from 'react';
import { shallow } from 'enzyme';

import { DescriptionHeaderView } from '../description-header-view';
import { YearTime } from '../year-time';
import { TitleRating } from '../title-rating';
import { ContentWrapper } from '../content-wrapper';

describe('description-header', () => {
  describe('snapshot', () => {
    const mockMovie = {
      poster_path: 'poster_path',
      genres: ['Action'],
      title: 'title',
      release_date: '2018',
      id: 1,
    };
    const mockQueryString = ['123', '456'];

    it('description header view', () => {
      const onPress = jest.fn();
      const component = shallow(
        <DescriptionHeaderView
          movie={mockMovie}
          dispatch={onPress}
          queryString={mockQueryString}
        />);

      expect(component).toMatchSnapshot();
    });

    it('year time', () => {
      const year = 2020;
      const formatRuntime = '150 min';
      const component = shallow(<YearTime formatRuntime={formatRuntime} date={year} />);

      expect(component).toMatchSnapshot();
    });

    it('title rating', () => {
      const rating = 7.0;
      const title = 'title';
      const component = shallow(<TitleRating title={title} vote_average={rating} />);

      expect(component).toMatchSnapshot();
    });

    it('content wrapper', () => {
      const component = shallow(<ContentWrapper movie={mockMovie} />);

      expect(component).toMatchSnapshot();
    });
  });
});