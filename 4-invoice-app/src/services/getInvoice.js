import { invoice } from "../data/invoice"

export const getInvoice =() => {

    /*
    let total = 0;

    invoice.items.forEach (item => 
        total = total + (item.price * item.quantity)

    )
    */

    const total = invoice.items
        .map(item => item.price * item.quantity)
        .reduce((accumulator, currentValue)=> accumulator + currentValue,0)
    // copiamos el objeto orginal y agregamos mas informacion
    return {...invoice,total};
}