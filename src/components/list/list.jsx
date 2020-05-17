import React, { PureComponent } from 'react';

import { ListItem } from '../list-item';

export class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handler = () => {
    console.log('ok');
  }

  render() {
    const { data = [] } = props;

    return data.map(
      (item, index) => (
        <React.Fragment key={item.id}>
          <h3>{index + 1}</h3>
          <ListItem item={item} onClick={handler} />
        </React.Fragment>
      )
    );
  }
}
