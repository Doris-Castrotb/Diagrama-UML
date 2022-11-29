import { cliente } from "./cliente";
import { shoppingCart } from './shoppingCart';
import { productos } from './productos';

const montse= new cliente ("montserrat","lunes","montse123","montse@.com","agrarista","ayer compro",); 
console.log(montse);

const rosa= new cliente("rosa","domingo","reosa123","rosa@.com","madero","antier compro");
console.log(rosa);

const shampoo= new productos(1223344534,"liquido",78,"shampoo");
console.log(shampoo);