export class Quote {
    showDetails:boolean;
    constructor(
        public id  : number,
        public saying : string,
        public author: string,
        public writtenDate : Date){
            this.showDetails=false;
        }
}






