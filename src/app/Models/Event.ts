import { Image } from "./Image";

export class Event {
  _id: any;
  title: String;
  description: String;
  image: string;
  user: any;
  date: Date = new Date();
  start: Date = new Date();
  end: Date = new Date();
  like: number;
  commentaires: any[];
  nombreCommentaire: number;

  constructor() { }
}
