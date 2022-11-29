export class productos{

    private codigo :number=0;
    private unidad_producto:string="";
    private precio:number=0;
    private nombre_producto:string="";
    constructor(codigo :number,unidad_producto:string,precio:number,nombre_producto:string){
        this.codigo=codigo;
        this.unidad_producto=unidad_producto;
        this.precio=precio;
        this.nombre_producto=nombre_producto;
    }
    public get_codigo():number {
        return this.codigo;
    }
    public get_unidad_produto():string {
        return this.unidad_producto;
    }
    public get_precio():number {
        return this.precio;
    }
    public get_nombre_producto():string {
        return this.nombre_producto;
    }
    public set_codigo (codigo:number){
        this.codigo = codigo ;
    }
    public set_unidad_producto (unidad_producto:string){
        this.unidad_producto = unidad_producto ;
    }
    public set_precio (precio:number){
        this.precio= precio ;
    }
    public set_nombre_producto (nombre_producto:string){
        this.nombre_producto = nombre_producto ;
    }

}