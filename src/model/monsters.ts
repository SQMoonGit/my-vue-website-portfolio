export class Monster{
    public id!: number;
    public name!: string;
    public type!: string;
    public species!: string;
    public descrip!: string;
    public elements!: [];
    public ailments!: object[];
    public locations!: object[];
    public resis!: object[];
    public weak!: object[];
    public rewards!: object[];

    constructor(){
        
    }
}