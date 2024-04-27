import { getInvoice } from "../services/getInvoice"

export const InvoiceApp = () => {

    //destructuramos
    const {id, name, client, company, items} = getInvoice();
    const {name: nameClient, lastName, address} = client;
    const{country, city, street, number} = address;
    const {name: nameEmpresa, fiscalNumber} = company;


    return (
        <>
            <h1>Ejmplo Factura</h1>
            <ul>
                <li>Id: { id }</li>
                <li>Name: { name }</li>
            </ul>
            <h3>Datos del Cliente</h3>
            <ul>
                <li>{ nameClient } { lastName }</li>
                <li>{ country }</li>
                <li>{ city }</li>
                <li>{ street } { number }</li>
            </ul>
            <h3>Datos de la empresa</h3>
            <ul>
                <li>{ nameEmpresa }</li> 
                <li>{ fiscalNumber }</li>   
            </ul>  
            <h4>Productos de la factura</h4>
        </>
    )

}