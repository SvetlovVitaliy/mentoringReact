import * as React from 'react';

export const App: React.FC<{}> = () => {
  const element = (<h1>Hello</h1>);
  const world = React.createElement(
    'h1',
    { className: 'world' },
    'world'
  );
  return (
    <>
      {element}
      {world}
    </>
  );
}
