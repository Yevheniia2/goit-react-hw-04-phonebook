import { PropTypes } from "prop-types";
import { ContactListLi } from "./ContactListItem.styled";
import { FormParagraph, FormButton } from "components/ContactForm/ContactForm.styled";

export function ContactListItem({ id, name, number, handleDeleteContact }) {
    return (
        <ContactListLi>
            <FormParagraph>{name}</FormParagraph>
            <FormParagraph>{number}</FormParagraph>
            <FormButton type='button' id={ id } onClick={ handleDeleteContact }>Delete</FormButton>
        </ContactListLi>
    );
}

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    handleDeleteContact: PropTypes.func,
};