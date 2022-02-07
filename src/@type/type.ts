export interface IDataList{
    Name:string;
    Priority:number;
    Questions:IDataQuestions[]
}

export interface IDataQuestions{
    Title:string;
    Priority:number;
    Body:string
}