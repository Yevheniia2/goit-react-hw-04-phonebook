import { Component } from "react";
import shortid from "shortid";
import PropTypes from 'prop-types';
import { FormBox, FormParagraph, FormInput, FormButton, FormLabel } from "./ContactForm.styled";

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChangeInput = ({ target: { value, name } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const contact = {
            ...this.state,
            id: shortid.generate(),
        }
        this.props.onAddContact(contact);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        return (
            <FormBox onSubmit={this.handleSubmit}>
                <FormLabel>
                    <FormParagraph>Name</FormParagraph>
                    <FormInput
                        onChange={ this.handleChangeInput }
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                    />
                </FormLabel>
                <FormLabel> 
                    <FormParagraph>Number</FormParagraph>
                    <FormInput
                        onChange={ this.handleChangeInput }
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                    />
                </FormLabel>
                <FormButton>Add contact</FormButton>
            </FormBox>
        );
    }
}

ContactForm.propTypes = {
    handleChangeInput: PropTypes.func,
};