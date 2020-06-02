import React, { FunctionComponent } from 'react';

import { HomeButton } from '../home-button/home-button';
import './styles.scss';

const SUB_TITLE = 'Films by Drama genre';

interface IDescriptionHeaderProps { }

export const DescriptionHeader: FunctionComponent<IDescriptionHeaderProps> = (props) => {
  return (
    <>
      <div className={'description-header'}>
        <div className={'description-header_link'}>
          <HomeButton />
        </div>
        <div className={'description-header_content'}>

        </div>
      </div>
      <div className={'sub-header'}>
        <b>
          {SUB_TITLE}
        </b>
      </div>
    </>
  );
};
