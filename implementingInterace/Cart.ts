import { IOrder } from "./CalculateTotal";


export class CartTotal implements  IOrder{
    calculateTotal: () => 100;
}