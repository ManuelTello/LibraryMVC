class Book
{
    public _Id?:number;
    public _Title:string;
    public _Author:string;
    public _Published:Date;

    public constructor(id?:number,title:string,author:string,published:Date)
    {
        this._Id = id;
        this._Title = title;
        this._Author = author;
        this._Published = published;
    }
};

export default Book;