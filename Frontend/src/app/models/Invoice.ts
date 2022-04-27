import {Book} from "./book";

export class Invoice {

  id?: any;
  user_id?: string;
  address?: string;
  contactno?: string;
  book?: Book[];
  amount_ofitems?:number;
  item_list?: string;
  price?: number;

}
