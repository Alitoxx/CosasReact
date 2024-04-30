import PropTypes from 'prop-types';

export const RowItemView = ({product, price, quantity}) => { 
    return (
        <>
            <tr>
                <td align="left">{ product }</td>
                <td align="right">{ price }</td>
                <td align="right">{ quantity }</td>
            </tr>
        </>
        
    )
}

RowItemView.propTypes = {
    product: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  };