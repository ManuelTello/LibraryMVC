import express, { Router, Request, Response } from "express";
import IController from "../Interfaces/IController";
import Book from "../Models/Book";
import { BookRepo } from "../Repos/BookRepo";

class BookController implements IController
{
    _URLPath:string = "/books";
    _Router: express.Router = Router();

    public constructor()
    {
        this.InitRoutes();
    }

    InitRoutes():void
    {
        this._Router.get(`${this._URLPath}/index`,this.Index);
        this._Router.post(`${this._URLPath}/add`,this.Add);
    }

    private Index(req:Request,res:Response):void
    {
        const books:Book[] = new BookRepo().GetBooks();
        res.status(200).json(books);
    }
    
    private Add(req:Request,res:Response):void
    {
        const id:string = req.body.id;
        const title:string = req.body.title;
        const author:string = req.body.author;
        const published:Date = req.body.published;

        const book:Book = new Book(id,title,author,published);
        new BookRepo().AddBook(book);
        res.status(200).redirect(`${this._URLPath}/index`);
    }

    private AddView(req:Request, res:Response):void
    {
        
    }
}

export default BookController;