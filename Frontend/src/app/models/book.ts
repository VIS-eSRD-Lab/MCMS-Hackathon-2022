import {Author} from "./author";
import {Genre} from "./genre";

export class Book {
  id?: any;
  title?: string;
  price?: number;
  year_of_publication?: number;
  author?: Author[];
  genre?:Genre[];
  publisher?:string;

}


