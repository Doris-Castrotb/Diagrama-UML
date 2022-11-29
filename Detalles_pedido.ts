export class detalles_pedido{
    private pedido: number=0;
    private producto: number=0;
    private nom_product:string="";
    private cantidad:number=0;
    private unitcost:number=0;
    private subtotal:string="";
     constructor(pedido:number,producto: number,nom_product:string,cantidad:number,unitcost:number,subtotal:string){
        this.pedido=pedido;
        this.producto=producto;
        this.nom_product=nom_product;
        this.cantidad=cantidad;
        this.unitcost=unitcost;
        this.subtotal=subtotal;
     }
     public get_pedido():number {
        return this.pedido;
    }
    public get_producto():number {
        return this.producto;
    }
    public get_nom_product():string {
        return this.nom_product;
    }
    public get_cantidad():number {
        return this.cantidad;
    }
    public get_subtotal():string {
        return this.subtotal;
    }
    public set_pedido (pedido:number){
        this.pedido = pedido ;
    }
    public set_producto (producto:number){
        this.producto = producto ;
    }
    public set_nom_product (nom_product:string){
        this.nom_product = nom_product ;
    }
    public set_cantidad (cantidad:number){
        this.cantidad = cantidad ;
    }
    public set_subtotal (subtotal:string){
        this.subtotal = subtotal;
    }
    public calcprice(mensaje:string):string{
        return mensaje;
       }
}