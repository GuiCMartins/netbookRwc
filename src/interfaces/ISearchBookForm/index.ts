import { IBook } from "interfaces/IBook";
import { ISearchBook } from "interfaces/ISearchBook";

export interface ISearchBookForm {
  book: IBook;
  searchBook: ISearchBook;
  isValid: boolean;
}
