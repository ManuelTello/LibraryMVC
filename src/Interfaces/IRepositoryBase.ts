import Book from "../Models/Book";

export interface IRepositoryBase
{
    _Context:any;
    Find():Book;
    FindId(id:string|number):Promise<Book>;
    Create(book:Book):Promise<void>;
    Delete(id:string|number):Promise<void>
    Update(book:Book):Promise<void>;
}