import React, { FunctionComponent } from 'react';

import { Header, SortingBlock, Footer, MovieList } from '../../components';

export const HomePage: FunctionComponent<{}> = (props) => {
  return (
    <>
      <Header />
      <SortingBlock />
      <MovieList {...props} />
      <Footer />
    </>
  );
};
