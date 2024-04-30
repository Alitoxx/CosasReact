import PropTypes from 'prop-types';
export const CompanyView = ({title, company }) => {

    const {name: nameEmpresa, fiscalNumber} = company;

    return (
        <>
           <h3>{ title }</h3>
            <ul className="list-group">
                <li className="list-group-item active">{ nameEmpresa }</li> 
                <li className="list-group-item">{ fiscalNumber }</li>   
            </ul>
        </>

    )
}


CompanyView.propTypes = {
    company: PropTypes.object,
    title: PropTypes.string
  }
