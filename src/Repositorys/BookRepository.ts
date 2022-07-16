import { IRepositoryBase } from "../Interfaces/IRepositoryBase";



export class BookRepository implements IRepositoryBase
{
    _Context: any;

    Find():Book
    {
        var book:Book = new Book("123","Hola","Nina", Date);
        return book;
    }

    async FindId(id: string | number): Promise<Book>
    {
    }

    async Create(book: Book): Promise<void> {
    }

    async Delete(id: string | number): Promise<void> {
    }

    async Update(book: Book): Promise<void> {
    }
    
}