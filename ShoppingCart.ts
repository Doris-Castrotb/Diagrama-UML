export class shoppingCart{
    private carro : number = 0;
    private producto : number = 0;
    private cantidad : number = 0;
    private fechaAgg : number = 0;
   
    constructor(carro:number, producto:number, cantidad:number, fechaAgg:number){
      this.carro=carro;
      this.producto=producto;
      this.cantidad=cantidad;
      this.fechaAgg=fechaAgg;
    }
    public get_carro():number{
      return this.carro;
    }
    public get_producto():number{
      return this.producto;
    }
    public get_cantidad():number{
      return this.cantidad;
    }
    public get_fechaAgg():number{
      return this.fechaAgg;
    }
    public set_carro (carro:number){
      this.carro = carro ;
  }
  public set_producto (producto:number){
      this.producto =producto ;
  }
  public set_cantidad (cantidad:number){
      this.cantidad = cantidad ;
  }
  public set_fechaAgg (fechaAgg:number){
      this.fechaAgg = fechaAgg ;
  }
  public (mensaje:string):string{
      return mensaje;
     }
     public addcartitem(mensaje:string):string{
      return mensaje;
     }
     public updatequantity(mensaje:string):string{
      return mensaje;
     }
     public viewcartdetails(mensaje:string):string{
      return mensaje;
     }
     public checkout(mensaje:string):string{
      return mensaje;
     }
}
