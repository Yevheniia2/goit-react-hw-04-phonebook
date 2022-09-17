import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormBox, FormParagraph, FormInput, FormButton, FormLabel } from "./ContactForm.styled";

export function ContactForm ({onAddContact}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChangeInput = event => {
        const { value } = event.currentTarget;
        event.currentTarget.name === 'name' ? setName(value) : setNumber(value);
    };
        
    const handleSubmit = event => {
        event.preventDefault();
        onAddContact(name, number);
        reset();
    };

    const  reset = () => {
        setName('');
        setNumber('');
    }

    return (
        <FormBox onSubmit={ handleSubmit }>
            <FormLabel>
                <FormParagraph>Name</FormParagraph>
                <FormInput
                    onChange={ handleChangeInput }
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                />
            </FormLabel>
            <FormLabel> 
                <FormParagraph>Number</FormParagraph>
                <FormInput
                    onChange={ handleChangeInput }
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                />
            </FormLabel>
            <FormButton>Add contact</FormButton>
        </FormBox>
    );
}

ContactForm.propTypes = {
    handleChangeInput: PropTypes.func,
};