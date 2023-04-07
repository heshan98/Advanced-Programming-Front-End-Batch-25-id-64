import * as moment from 'moment';
import { Moment } from 'moment';



export interface IRegister {
 id?:string,
 createdDate?:Moment,
 email?:string,
 name?:string,
 dateOfBirth?:string,
 loanBalance?:Number,
 budget?:Number
 usedAmount?:Number
 installmentPlan?:string
 password?:string


   
    
  
  
  }
  
  export class Register implements IRegister{
    constructor(
      
        public id?:string,
        public createdDate?:Moment,
        public email?:string,
        public name?:string,
        public dateOfBirth?:string,
        public loanBalance?:Number,
        public budget?:Number,
        public  usedAmount?:Number,
        public installmentPlan?:string,
        public password?:string
       
 
    ) {}
  }