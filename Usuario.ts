export class usuario{
    private usuario:string="";
    private contraseña:string="";
    private estado_ini:string="";
    private fec_regis:string="";
    constructor(usuario:string, contraseña:string, estado_ini:string,fec_regis:string) {
    this.usuario=usuario;
    this.contraseña=contraseña;
    this.estado_ini=estado_ini;
    this.fec_regis=fec_regis;
    }
    public get_usuario():string {
        return this.usuario;
    }
    public get_contaseña():string {
        return this.contraseña;
    }
    public get_estado_ini():string {
        return this.estado_ini;
    }
    public get_fec_regis ():string {
        return this.fec_regis;
    }
    public set_usuario (usuario:string){
        this.usuario = usuario ;
    }
    public set_contraseña (contraseña:string){
        this.contraseña = contraseña ;
    }
    public set_estado_ini (estado_ini:string){
        this.estado_ini = estado_ini ;
    }
    public set_fec_regis (fec_regis:string){
        this.fec_regis = fec_regis ;
    }
    public verifyLogin(mensaje:string):string{
        return mensaje;
       }
}