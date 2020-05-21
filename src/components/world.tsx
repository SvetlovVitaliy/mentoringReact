import React, { Component } from 'react';
import { useDispatch } from 'react-redux';

export class World extends Component {

  componentDidMount() {
    // throw new Error('this Error');
  }

  render() {
    return (
      <>
        <h1>Hello world</h1>
        <Element />
      </>
    );
  }
}

const Element: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const hundlePress = () => {
    dispatch({ type: "ACTION_ELEMENT" });
  };

  return (
    <button onClick={hundlePress}>Tut net action</button>
  );
}