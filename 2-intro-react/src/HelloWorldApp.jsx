import { Fragment } from "react";
import PropTypes from 'prop-types';
import { Title} from './components/Title';
import {UserDetails} from './components/UserDetails';
import {Book} from './components/Book';

export const HelloWorldApp = ({user, id, title, book}) => {
    
    return (
        <Fragment>
            <Title title = { title } />
            <UserDetails user ={ user } id= { id }/>
            <Book book = { book } />
            
        </Fragment>
    )
    
}

HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,

}

HelloWorldApp.defaultProps = {
    title: 'Hola mundo por defecto!',
    book: 'UML got a gota'

}