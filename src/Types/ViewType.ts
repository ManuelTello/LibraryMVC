import Book from "../Models/Book";

export type ViewData = 
{
    Controller:string,
    Action:string,
    Title:string,
    Payload?:Book[]
};