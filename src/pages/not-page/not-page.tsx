import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface INotFoundPageProps { }

export const NotFoundPage: FunctionComponent<INotFoundPageProps> = () => {
  return (
    <div>
      <p style={{ textAlign: "center" }}>
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
}
