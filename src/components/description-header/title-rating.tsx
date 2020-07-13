import React, { FunctionComponent } from 'react';

interface ITitleRatingProps {
  title: string;
  vote_average: number;
}

export const TitleRating: FunctionComponent<ITitleRatingProps> = ({
  title,
  vote_average,
}) => {
  return (
    <div className={'description-header_description__title-rating'}>
      <div className={'description-header_description__title'}>{title}</div>
      <div className={'description-header_description__rating'}>{vote_average}</div>
    </div>
  );
};
