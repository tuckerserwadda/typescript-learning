// suppose we have  a cart and orderr modules that use this module to calculate 
// there respective totals 

// we create an orderInterface  with one paramm calculate total
export interface IOrder{
    calculateTotal:()=>number
}

export function calculateTotalAmount(order:IOrder){
    let  total = order.calculateTotal();
    const discount = total *0.1;
    total -= discount;
    const tax = total * 0.2;
    total += tax;
    return total;
}