import React, { FunctionComponent } from 'react';
import { DescriptionHeader, Footer, MovieList } from '../../components';

interface IDetailsPageProps { }

export const DetailsPage: FunctionComponent<IDetailsPageProps> = (props) => {
  return (
    <>
      <DescriptionHeader {...props} />
      <MovieList {...props} />
      <Footer />
    </>
  );
};
