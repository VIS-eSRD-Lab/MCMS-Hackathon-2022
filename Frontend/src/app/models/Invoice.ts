import {Book} from "./Book";

export class Invoice {

  id?: any;
  customerid?: string;
  customeraddress?: string;
  customercontact?: string;
  book?: Book[];
  quantity?:number;
  salesprice?: number

}
