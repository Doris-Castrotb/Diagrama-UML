export class info_envio{
    private envio:number =0;
    private tipo_envio:string="";
    private costo_envio:number=0;
    private region_envio:number=0;
    constructor(envio:number,tipo_envio,costo_envio:number,region_envio:number){
        this.envio=envio;
        this.tipo_envio=tipo_envio;
        this.costo_envio=costo_envio;
        this.region_envio=region_envio;
    }
    public get_envio():number {
        return this.envio;
    }
    public get_tipo_envio():string {
        return this.tipo_envio;
    }
    public get_costo_envio():number {
        return this.costo_envio;
    }
    public get_region_envio():number {
        return this.region_envio;
    }
    public set_envio (envio:number){
        this.envio = envio  ;
    } 
    public set_tipo_envio (tipo_envio:string){
        this.tipo_envio = tipo_envio  ;
    } 
    public set_costo_envio (costo_envio:number){
        this.costo_envio = costo_envio  ;
    } 
    public set_region_envio (region_envio:number){
        this.region_envio = region_envio  ;
    } 
    public info_actuali(mensaje:string):string{
        return mensaje;
       }
    
    }