import { stringify } from "querystring";
import Book from "../Models/Book";

export class BookRepo
{
    private _Books:Book[];
    
    public constructor()
    {
        this._Books = 
        [
            new Book(1,"Title 1","Author 1",new Date),
            new Book(2,"Title 2","Author 2",new Date),
            new Book(3,"Title 3","Author 3",new Date),
            new Book(4,"Title 4","Author 4",new Date)
        ];
    }

    public GetBooks(id?:number):Book[]
    {
        if(id)
        {
            const query:Book = this._Books.find(b => b._Id == id);
            const books:Book[] = [];
            books.push(query);
            return books;
        }
        else
        {
            return this._Books;
        }
    }  
    
    public AddBook(book:Book):void
    {
        book._Id = this._Books.length + 1;
        this._Books.push(book);
    }
};
