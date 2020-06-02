import React, { FunctionComponent } from 'react';
import { DescriptionHeader, Footer, MovieList } from '../../components';

interface IDetailsPageProps { }

export const DetailsPage: FunctionComponent<IDetailsPageProps> = () => {
  return (
    <>
      <DescriptionHeader />
      <MovieList />
      <Footer />
    </>
  );
};
