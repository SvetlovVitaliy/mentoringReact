import React, { FunctionComponent } from 'react';

import { Header, SortingBlock, Footer, MovieList } from '../../components';

interface IHomePageProps { }

export const HomePage: FunctionComponent<IHomePageProps> = () => {
  return (
    <>
      <Header />
      <SortingBlock />
      <MovieList />
      <Footer />
    </>
  );
};
