import PropTypes from 'prop-types';

import { RowItemView } from "./RowItemView"

export const ListItemsView =  ({title, items, handlerDeleteItem}) => {
    return(
        <>
            <h4>{ title }</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th align="left">Producto</th>
                        <th align="center">Precio</th>
                        <th align="right">Cantidad</th>
                        <th align="right">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, price, quantity }) => (
                            <RowItemView 
                                key={ id } 
                                id={ id } 
                                product= { product } 
                                price= { price } 
                                quantity={ quantity}  
                                handlerDeleteItem={id => handlerDeleteItem(id)}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
)}

ListItemsView.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string 
 };