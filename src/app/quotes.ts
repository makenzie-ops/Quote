export class Quote {
    public ups:number
    public downs:number
    showDetails:boolean;
    highestQuote :boolean;
    constructor(
        public id  : number,
        public saying : string,
        public author: string,
        public name : string,
        public writtenDate : Date){

         this.ups =0;
         this.downs =0;
        this.showDetails=false;
        this.highestQuote = false;
        }
}






