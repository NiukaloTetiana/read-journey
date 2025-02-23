export interface IBook {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  recommend: boolean;
}

export type ReadingProgress = {
  startPage: number;
  startReading: string;
  finishPage: number;
  finishReading: string;
  speed: number;
  status: "inactive" | "active";
};

export type OwnBook = {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  status: "in-progress" | "unread" | "completed";
  owner: string;
  progress: ReadingProgress[];
};
