export class Quotes {
    showDetails:boolean;
    constructor(
        public id  : number,
        public saying : string,
        public author: string){
            this.showDetails=false;
        }
}
