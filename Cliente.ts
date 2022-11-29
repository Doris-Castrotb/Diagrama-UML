import { shoppingCart } from "./shoppingCart";
export class cliente{

 
    private nombre:string="";
    private envio:string="";
    private cuenta:string=""; 
    private email:string="";
    private direccion:string="";
    private infocompras:string="  ";
    
   constructor(nombre:string,envio:string,cuenta:string,email:string,direccion:string,infocompras:string){
    this.nombre=nombre;
    this.envio=envio;
    this.cuenta=cuenta;
    this.email=email;
    this.direccion=direccion; 
    this.infocompras=infocompras;
   }

   public get_nombre():string {
    return this.nombre;
}
public get_envio():string {
    return this.envio;
}
public get_cuenta():string {
    return this.cuenta;
}
public get_email():string {
    return this.email;
}
public get_direccion():string {
    return this.direccion;
}
public get_infocompras():string {
    return this.infocompras;
}
public set_nombre(nombre:string){
    this.nombre = nombre;
 }
 public set_envio(envio:string){
    this.envio =envio;
 }
 public set_cuenta(cuenta:string){
    this.cuenta = cuenta;
 }
 public set_email(email:string){
    this.email = email;
 }
 public set_direccion(direccion:string){
    this.direccion=direccion;
 }
 public set_infocompras(infocompras:string){
    this.infocompras = infocompras;
 }
 public registro(mensaje:string):string{
    return mensaje;
   }
   public inisecion(mensaje:string):string{
    return mensaje;
   }
   public actaliperfil(mensaje:string):string{
    return mensaje;
   }
}