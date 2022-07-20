import { Router } from "express";

interface IController 
{
    readonly _Router:Router;
    readonly _URLPath:string;
    InitRoutes():void;
};

export default IController;