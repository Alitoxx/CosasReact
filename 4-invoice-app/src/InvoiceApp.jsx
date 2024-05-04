import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { useState } from "react";

export const InvoiceApp = () => {

    //destructuramos
    const {id, name, client, company, items: itemsInitial,total} = getInvoice();

    //se genera un objeto para poder controlar los campos y su estado 
    const [formItemsState,setFormItemState] = useState({
        product: '',
        price: '',
        quantity: '' 
    });
    // aca se pasan por variable para que podamos usarla
    const {product,price,quantity} = formItemsState;
    const [items, setItems] = useState(itemsInitial); //asi se maneja cuando se quiere agregar un nuevo item
    const [counter,setCounter] = useState(4); //asi se aumenta el valor de 1 campo

    // se separa del codigo html los eventos que realiza el boton el name es el nombre del campo y value es el valor de campo 
    const onInputChange = ({ target: { name, value } }) =>  {
        console.log(name);
        console.log(value);   
        setFormItemState({
            ...formItemsState,
            [name]: value
        });    
    }

    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault();

        if (product.trim().length<=1) {
            alert('Debe Ingresar Producto');
            return;
        }
        if (price.trim().length<=1) {
            alert('Falta Precio');
            return;
        }
        if (isNaN(price.trim())) {
            alert('Precio debe ser Numerico');
            return;
        }
        if (quantity.trim().length<1) {
            alert('Falta Cantidad');
            return;
        };
        if (isNaN(quantity.trim())) {
            alert('Cantidad debe ser Numerico');
            return;
        }
        
        setItems([...items, {
            id:counter,
            product: product.trim(), 
            price: +price.trim(),
            quantity: parseInt(quantity.trim(),10)
        }])        
        
        setFormItemState({
            product: '',
            price: '',
            quantity: '', 
        })

        setCounter(counter+1);
    }

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        Ejmplo Factura
                    </div>
                    <div className="card-body">
                        <InvoiceView id={ id } name={ name } />
                      
                        <div className="row my-3">
                      
                            <div className="col">
                                <ClientView title= "Datos del Cliente" client={ client } />
                            </div>
                      
                            <div className="col">
                                <CompanyView title= "Datos de la empresa" company= { company } />
                            </div>
                        </div>  
                        <ListItemsView title="Productos de la factura" items={ items } />
                        <TotalView total = { total }/>
                        <form  className="w-50" onSubmit={ event => onInvoiceItemsSubmit(event) }>
                            <input
                                type="text" 
                                name="product" 
                                value={ product }
                                placeholder="Producto" 
                                className="form-control m-3" 
                                onChange={ onInputChange }  
                            /> 
                            <input
                                type="text" 
                                name="price" 
                                value={ price }
                                placeholder="Precio" 
                                className="form-control m-3" 
                                onChange={event => onInputChange(event)}  
                            /> 
                            <input
                                type="text" 
                                name="quantity"
                                value={ quantity } 
                                placeholder="Cantidad" 
                                className="form-control m-3" 
                                onChange={ onInputChange }  
                            />  
                            <button 
                                type="submit" 
                                className="btn btn-primary m-3">
                                    Nuevo Item
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}