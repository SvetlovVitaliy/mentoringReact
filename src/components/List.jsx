import React, { PureComponent } from 'react'
import { ListItem } from './ListItem';

export default class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return !!this.props.data && this.props.data.map(
      (item, index) => (
        <React.Fragment key={item.id}>
          <h3>{index + 1}</h3>
          <ListItem item={item} />
        </React.Fragment>
      )
    );
  }
}
