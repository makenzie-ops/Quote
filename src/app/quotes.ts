export class Quote {
    showDetails:boolean;
    highestQuote :boolean;
    constructor(
        public id  : number,
        public saying : string,
        public author: string,
        public name : string,
        public ups:number,
        public downs:number,
        public writtenDate : Date){

        
        this.showDetails=false;
        this.highestQuote = false;
        }
}






