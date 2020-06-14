import { Dispatch } from "redux";

export const fetchSomething = () => {
  return async (dispatch: Dispatch) => {
    const response = await fetch('https://reactjs-cdp.herokuapp.com/movies');
    const movies = await response.json();
    dispatch({
      type: 'response',
      movies,
    })
  };
};