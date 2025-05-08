export interface IBook {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  recommend: boolean;
}

export interface IReadingProgress {
  startPage: number;
  startReading: string;
  finishPage?: number;
  finishReading?: string;
  speed?: number;
  status: "inactive" | "active";
}

export interface IBookOwn {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  status: "in-progress" | "unread" | "completed";
  owner: string;
  progress: IReadingProgress[];
}

export interface IBooksRecommendedResponse {
  results: IBook[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface IBooksRecommendedRequest {
  title?: string;
  author?: string;
  page: number;
  limit: number;
}

export interface INewBook {
  title: string;
  author: string;
  totalPages: number;
}

export interface ITimeLeftToRead {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface IResponseReading extends IBookOwn {
  timeLeftToRead?: ITimeLeftToRead;
}
