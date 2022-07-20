import express, { Router, Request, Response } from "express";
import IController from "../Interfaces/IController";
import Book from "../Models/Book";
import { BookRepo } from "../Repos/BookRepo";
import { IView } from "../Interfaces/IView";

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
        this._Router.get(`${this._URLPath}/index`,this.Index)
                    .get(`${this._URLPath}/index/:id`,this.Index);
        this._Router.get(`${this._URLPath}/add`,this.AddView)
                    .post(`${this._URLPath}/add`,this.Add);
    }

    private Index(req:Request,res:Response):void
    {
        const id:string = req.params.id;
        const repo:BookRepo = new BookRepo();
        const payload:Book[] = id ?  repo.GetBooks(id) : repo.GetBooks();
        
        const view:IView = 
        {
            Base:"base",
            Data:{Title:"Index of Books",Controller:"Books",Action:"Index",Payload:payload}
        }
        res.render(view.Base,view.Data);
    }

    
    private Add(req:Request,res:Response):void
    {
        console.log("Added");
        /*const id:string = req.body.id;
        const title:string = req.body.title;
        const author:string = req.body.author;
        const published:Date = req.body.published;

        const book:Book = new Book(id,title,author,published);
        new BookRepo().AddBook(book);
        res.status(200).redirect(`${this._URLPath}/index`);*/
    }

    private AddView(req:Request, res:Response):void
    {
        const view:IView =
        {
            Base:"base",
            Data:{Controller:"Books",Action:"Add",Title:"Add Book"}
        };

        res.status(200).render(view.Base,view.Data);
    }
}

export default BookController;