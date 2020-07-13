import React, { FunctionComponent } from 'react';

interface IYearTimeProps {
  formatRuntime: string;
  date: number;
}

export const YearTime: FunctionComponent<IYearTimeProps> = ({
  formatRuntime,
  date,
}) => {
  return (
    <div className={'description-header_description__year-time'}>
      <div className={'description-header_description__year'}>{date}</div>
      <div className={'description-header_description__time'}>{formatRuntime}</div>
    </div >
  );
};
