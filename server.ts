import { join } from "path";
import express,{ Application, IRouter } from "express";
import { BookController } from "./src/Controllers/BooksController";

class Program
{
    private _ExpressApp:Application = express();
    private _Port:number;

    public constructor(routers:IRouter[])
    {
        this._Port = 3000;
        this.InitializeRoutes(routers);
        this.InitializeConfiguration();
        this.InitializeConnectionToDB();
    }

    public StartUpServer():void
    {
        const server = this._ExpressApp.listen(this._Port, ()=>
        {
            console.log("server up", this._Port);
        });
    }
    
    private InitializeRoutes(routers:IRouter[]):void
    {
        routers.forEach(r => this._ExpressApp.use("/", r));
    }

    private InitializeConfiguration():void
    {
        this._ExpressApp.use(express.static(join(process.cwd(),"public")));
        this._ExpressApp.use(express.json());
        this._ExpressApp.use(express.urlencoded({extended:true}));
        this._ExpressApp.set("view engine", "ejs");
        this._ExpressApp.set("views",join(process.cwd(),"src","Views"));
    }

    private InitializeConnectionToDB():void
    {

    }
}

const PROGRAM = new Program( 
    [
        new BookController().GetRouter(),
    ]
);

PROGRAM.StartUpServer();