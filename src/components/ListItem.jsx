import React from 'react';

export const ListItem = ({ item, onClick }) => {
  return (
    <li onClick={onClick}>
      {item.name + '-' + item.age + '%'}
    </li>
  )
};