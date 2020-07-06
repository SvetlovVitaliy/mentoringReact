import React, { FunctionComponent } from 'react';

import { Header, SortingBlock, Footer, MovieList } from '../../components';

interface IHomePageProps { }

export const HomePage: FunctionComponent<IHomePageProps> = (props) => {
  return (
    <>
      <Header />
      <SortingBlock onclickRadioButton={() => { }} />
      <MovieList {...props} />
      <Footer />
    </>
  );
};
