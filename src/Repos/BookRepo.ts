import Book from "../Models/Book";

export class BookRepo
{
    protected _Books:Book[];
    
    public constructor()
    {
        this._Books = 
        [
            new Book("1","Title 1","Author 1",new Date),
            new Book("2","Title 2","Author 2",new Date),
            new Book("3","Title 3","Author 3",new Date),
            new Book("4","Title 4","Author 4",new Date)
        ];
    }

    public GetBooks():Book[]
    {
        return this._Books;
    }  
    
    public AddBook(book:Book):void
    {
        this._Books = [...this._Books,book];
    }
};
