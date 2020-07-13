import React, { FunctionComponent } from 'react';

import { DescriptionHeader, Footer, MovieList } from '../../components';

export const DetailsPage: FunctionComponent<{}> = (props) => {
  return (
    <>
      <DescriptionHeader {...props} />
      <MovieList {...props} />
      <Footer />
    </>
  );
};
