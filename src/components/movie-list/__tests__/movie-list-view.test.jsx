import React from 'react';
import { shallow, mount } from 'enzyme';

import { MovieListView } from '../movie-list-view';

describe('movie-list', () => {
  describe('snapshot', () => {
    it('Snapshot movie list', () => {
      const component = shallow(<MovieListView />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('life cycle', () => {

    let onPress;
    let component;

    beforeEach(() => {
      onPress = jest.fn();
    });

    afterEach(() => {
      component.unmount();
    });

    it('onPress called 2 times', () => {
      const mockMatch = { params: { id: 12 } };
      component = mount(<MovieListView fetchMovies={onPress} match={mockMatch} />);
      component.mount();
      expect(onPress.mock.calls.length).toBe(2);
    });

    it('onPress called 1 time', () => {
      const mockLocation = { search: 'string' };
      component = mount(<MovieListView fetchMovies={onPress} location={mockLocation} />);
      component.mount();
      expect(onPress.mock.calls.length).toBe(1);
    });
  });
});