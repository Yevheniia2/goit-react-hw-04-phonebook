import { ContactListItem } from "./ContactListItem";
import PropTypes from 'prop-types';
import { ContactListUl } from "./ContactList.styled";

export const ContactList = ({ contacts, handleDeleteContact }) => {
    return (
        <ContactListUl>
        {contacts.map(({ id, name, number }) => {
            return (<ContactListItem key={ id } id={id} name={ name } number={ number } handleDeleteContact={ handleDeleteContact }/>);
        })}
        </ContactListUl>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array,
    handleDeleteContact: PropTypes.func,
};