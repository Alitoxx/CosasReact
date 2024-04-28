import { getInvoice } from "../services/getInvoice"

export const InvoiceApp = () => {

    //destructuramos
    const {id, name, client, company, items} = getInvoice();
    const {name: nameClient, lastName, address} = client;
    const{country, city, street, number} = address;
    const {name: nameEmpresa, fiscalNumber} = company;


    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        Ejmplo Factura
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">Id: { id }</li>
                            <li className="list-group-item">Name: { name }</li>
                        </ul>
                        <div className="row my-3">
                            <div className="col">
                                <h3>Datos del Cliente</h3>
                                <ul className="list-group">
                                    <li className="list-group-item active">{ nameClient } { lastName }</li>
                                    <li className="list-group-item">{ country } / { city }</li>
                                    <li className="list-group-item">{ street } { number }</li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>Datos de la empresa</h3>
                                <ul className="list-group">
                                    <li className="list-group-item active">{ nameEmpresa }</li> 
                                    <li className="list-group-item">{ fiscalNumber }</li>   
                                </ul>
                            </div>
                        </div>  
                        <h4>Productos de la factura</h4>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th align="left">Producto</th>
                                    <th align="center">Precio</th>
                                    <th align="right">Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(({ id, product, price, quantity }) => (<tr key={ id }>
                                        <td align="left">{ product }</td>
                                        <td align="right">{ price }</td>
                                        <td align="right">{ quantity }</td>
                                    </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}