export interface IPost {
  content: string;
  author: IUser | string;
  likes: number;
  timestamp: Date;
}

export interface IUser {
  username: string;
  password: string;
}

export interface IComment {
  content: string;
  author: IUser | string;
  post: IPost | string;
  likes: number;
  timestamp: Date;
}
