import express from "express";
import IController from "./src/Interfaces/IController";
import BookController from "./src/Controllers/BookController";

class ExpressApp 
{
    private readonly _App:express.Application;
    private readonly _Port:any;

    public constructor(controllers:IController[])
    {
        this._App = express();
        this._Port = 8080;

        this.InitMiddlewares();
        this.InitControllers(controllers);
    }

    private InitMiddlewares():void
    {
        this._App.use(express.json());
        this._App.use(express.urlencoded({extended:true}));
    }

    private InitControllers(controllers:IController[]):void
    {
        controllers.forEach(({_Router}) => this._App.use("/", _Router ));
    }

    public StartServer():void
    {
        this._App.listen(this._Port,()=>
        {
            console.log("Server up at port,",this._Port);
        });
    }
};


const PROGRAM:ExpressApp = new ExpressApp(
    [
        new BookController(),
    ]
);

PROGRAM.StartServer();