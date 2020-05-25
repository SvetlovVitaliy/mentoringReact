import React, { FunctionComponent } from 'react';

import { ButtonRadio, ButtonSearch, Poster } from '../../components';

const mock = [
  {
    id: 'title',
    title: 'TITLE',
  },
  {
    id: 'gengre',
    title: 'GENGRE',
  },
];

interface IHomePageProps { }

export const HomePage: FunctionComponent<IHomePageProps> = () => {
  return (
    <>
      <ButtonRadio buttons={mock} onPress={() => { console.log('click') }} />
      <ButtonSearch onPress={() => { console.log('click') }} />
      <Poster />
    </>
  );
};
