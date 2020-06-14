import React from 'react';
import { shallow } from 'enzyme';

import { DetailsPage } from '../../';

describe('details-page', () => {
  it('Snapshot button', () => {
    const button = shallow(<DetailsPage />);

    expect(button).toMatchSnapshot();
  })
})