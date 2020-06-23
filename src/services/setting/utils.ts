export enum TSortingOrder {
  ASK = 'asc',
  DESC = 'desc',
}

export enum TSortingType {
  RELEASE_DATE = 'release_date',
  RATING = 'rating',
}

export enum TSearchType {
  TITLE = 'title',
  GENRES = 'genres',
}

export interface ISettingData {
  searchParams: {
    searchString: string;
    sortOrder: TSortingOrder;
    filterByGenres: string[];
    sortBy: TSortingType;
    searchBy: TSearchType;
  };
}

export const initialState: ISettingData = {
  searchParams: {
    searchString: '',
    sortOrder: TSortingOrder.ASK,
    filterByGenres: [],
    sortBy: TSortingType.RATING,
    searchBy: TSearchType.TITLE,
  }
}