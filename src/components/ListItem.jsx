import React from 'react';

export const ListItem = ({ item }) => <li onClick={()=>{
  alert(`Hello! My name is ${item.name}`);
}}>{item.name + '-' + item.age + '%'}</li>