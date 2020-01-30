console.log("voyage App")

class Sejour {
    constructor(private _nom:string, private _prix:number){
    }
    get prix(){
        return this._prix;
    }
    get nom(){
        return this._nom;
    }
    toString():string {
        return `${this._nom} - ${this._prix}€`
        }
}

class SejourService{
    private _seJour:Sejour[]
    constructor(){
        const sejour1 = new Sejour('Paris',400);
        const Sejour2=new Sejour('Seoul',1200);
        const Sejour3=new Sejour('Londre',600);
        const Sejour4=new Sejour('Nyc',1400);
        this._seJour=[sejour1, Sejour2, Sejour3, Sejour4];

    }
    rechercheSejour(nom:string):Sejour|void{
        
        for(const seJour of this._seJour){
            if(seJour.nom===nom){
                return seJour;
            }
        }
    }

}

const sejourService=new SejourService();
console.log(sejourService.rechercheSejour('Londre'));