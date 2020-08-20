import React, { FunctionComponent } from 'react';

import { Header, SortingBlock, Footer, MovieList } from '../../components';

export const NotFound: FunctionComponent<{}> = () => {
  return (
    <>
      <Header />
      <SortingBlock />
      <MovieList />
      <Footer />
    </>
  );
};
