import {Book} from "./Book";
import {Item} from "./Item";

export class Invoice {

  id?: any;
  customerid?: string;
  customeraddress?: string;
  customercontact?: string;
  item?: Item[];
  quantity?:number;
  salesprice?: number

}
