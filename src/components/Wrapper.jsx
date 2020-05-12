import React, { Component } from 'react';
import Header from './Header';
import List from './List';

const user = { name: 'Jon', age: 25, id: '1' };
const user1 = { name: 'Jek', age: 100, id: '2'  };
const user2 = { name: 'Tot', age: 15, id: '3'  };
const user3 = { name: 'Col', age: 35, id: '4'  };
const user4 = { name: 'Bob', age: 60, id: '5'  };
const mockData = [user, user1, user2, user3, user4];

export default class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        <List data={mockData} />
      </div>
    )
  }
}
