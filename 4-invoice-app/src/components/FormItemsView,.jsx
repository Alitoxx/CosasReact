import { useEffect, useState } from "react";

export const FormItemsView = ({ handler }) => {


    //se genera un objeto para poder controlar los campos y su estado 
    const [formItemsState,setFormItemState] = useState({
        product: '',
        price: '',
        quantity: '' 
    });
      // aca se pasan por variable para que podamos usarla
    const {product,price,quantity} = formItemsState;
    
    useEffect(() => {
    },[price]);

    useEffect(() => {
    },[formItemsState]);
    
    // se separa del codigo html los eventos que realiza el boton el name es el nombre del campo y value es el valor de campo 
    const onInputChange = ({ target: { name, value } }) =>  {
       // console.log(name);
       // console.log(value);   
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
            
        handler(formItemsState);

        setFormItemState({
            product: '',
            price: '',
            quantity: '', 
        })
    }

    return(<>
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
    </>)
}