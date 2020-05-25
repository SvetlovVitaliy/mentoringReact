import React, { Component } from 'react';
import { useDispatch } from 'react-redux';

import { ButtonRadio } from './button-radio/button-radio';
import { ButtonSearch } from './button-search/button-search';

const mock = [
  {
    id: 'title',
    title: 'TITLE',
  },
  {
    id: 'gengre',
    title: 'GENGRE',
  },
];

export class World extends Component {
  render() {
    return (
      <>
        <h1>Hello world</h1>
        <Element />
        <ButtonRadio buttons={mock} onPress={() => { console.log('click') }} />
        <ButtonSearch onPress={() => { console.log('click') }} />
      </>
    );
  }
}

const Element: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const hundlePress = () => {
    dispatch({ type: "ACTION_ELEMENT", payload: mock });
  };

  return (
    <button onClick={hundlePress}>Tut net action</button>
  );
}