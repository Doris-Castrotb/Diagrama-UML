export class order{
    private pedido:number =0;
    private fec_creacion:string="";
    private fec_envio:string="";
    private nom_cliente:string="";
    private clien:string="";
    private estado:string="";
    private envio:string="";

    constructor(pedido:number,fec_creacion:string,fec_envio:string,nom_cliente:string,clien:string,estado:string,envio:string)
    {
        this.pedido = pedido;
        this.fec_creacion = fec_creacion;
        this.fec_envio=fec_envio;
        this.nom_cliente = nom_cliente;
        this.estado = estado;
        this.envio = envio;
        this.clien =clien;
    }
    public get_pedido():number {
        return this.pedido;
    }
    
    public get_fec_creacion():string {
        return this.fec_creacion;
    }
    public get_fec_envio():string {
        return this.fec_envio;
    }

    public get_nom_cliente():string {
    return this.nom_cliente;
    }

    public get_estado():string {
    return this.estado;
    }
    public get_envio():string {
    return this.envio;
    }
    public get_clien():string {
    return this.clien;
    }
    public set_pedido (pedido:number){
        this.pedido = pedido ;
    }
    public set_fec_envio (fec_envio:string){
        this.fec_envio = fec_envio  ;
    }
    public set_nom_cliente(nom_cliente:string){
        this.nom_cliente = nom_cliente  ;
    }
    public set_estado (estadp:string){
        this.estado= this.estado ;
    }
    public set_envio (envio:string){
        this.envio= envio ;
    }
    public set_clien (clien:string){
        this.clien = clien ;
    }
    public lugar_orden(mensaje:string):string{
        return mensaje;
       }
}