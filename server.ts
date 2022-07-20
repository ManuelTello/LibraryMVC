import express from "express";
import IController from "./src/Interfaces/IController";
import BookController from "./src/Controllers/BookController";
import { join } from "path";

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
        const { cwd } = process;

        this._App.use(express.json());
        this._App.use(express.urlencoded({extended:true}));
        this._App.use(express.static(join(cwd(),"public")));
        this._App.use("/CSS",express.static(join(cwd(),"node_modules","bootstrap","dist","css")));
        this._App.set("view engine","ejs");
        this._App.set("views",join(cwd(),"src","Views"));
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