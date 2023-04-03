import * as moment from 'moment';
import { Moment } from 'moment';



export interface IProduct {
 id?:string
 createdDate?:Moment;
 productName?:string
   
    
  
  
  }
  
  export class Product implements IProduct{
    constructor(
      
        public id?:string,
        public createdDate?:Moment,
        public productName?:string
 
    ) {}
  }