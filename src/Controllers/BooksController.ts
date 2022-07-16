import { Router, IRouter, Request, Response } from "express";
import { IControllerBase } from "../Interfaces/IControllerBase";

export class BookController implements IControllerBase
{
    _Router: Router = Router();
    _Path:String = "/book";

    public constructor()
    {
        this.InitializeRoutes();
    }

    public GetRouter():IRouter
    {
        return this._Router;
    }

    private InitializeRoutes():void
    {
        this._Router.get(`${this._Router}/index`,this.Index);
    }

    private async Index(req:Request, res:Response):Promise<void>
    {
        try
        {
            console.log("sending");
            await res.status(200).send("Hola");
        }
        catch(err)
        {
            console.log(err);
        }
    }
}