import React, { FunctionComponent } from 'react';

import { Header, SortingBlock, Footer, MovieList } from '../../components';

interface INotFoundProps { }

export const NotFound: FunctionComponent<INotFoundProps> = () => {
  return (
    <>
      <Header />
      <SortingBlock />
      <MovieList />
      <Footer />
    </>
  );
};
