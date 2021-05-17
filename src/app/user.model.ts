import { tokenize } from "@angular/compiler/src/ml_parser/lexer"

export class User{
    constructor(
        public access_token:string,
        private expires:Date,
       public issued:Date,
       public userName:string
    ){}


get token(){
 /* if(!this.expires || new Date() > this.expires){
    return null;
}  */
return this.access_token;
}

}