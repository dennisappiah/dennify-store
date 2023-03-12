import ProductModel from "./products";


export default interface CartModel extends ProductModel{
    id : number,
    amount: number,
}
