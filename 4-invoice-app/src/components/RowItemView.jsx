import PropTypes from 'prop-types';

export const RowItemView = ({id, product, price, quantity, handlerDeleteItem}) => { 
    return (
        <>
            <tr>
                <td align="left">{ product }</td>
                <td align="right">{ price }</td>
                <td align="right">{ quantity }</td>
                <td><button
                    className='btn btn-danger' 
                    onClick={()=> handlerDeleteItem(id)}>Eliminar</button></td>
            </tr>
        </>
        
    )
}

RowItemView.propTypes = {
    product: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  };