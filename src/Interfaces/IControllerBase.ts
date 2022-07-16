import { IRouter } from "express";

export interface IControllerBase 
{
    readonly _Router:IRouter;
    _Path:String;
    GetRouter():IRouter
};