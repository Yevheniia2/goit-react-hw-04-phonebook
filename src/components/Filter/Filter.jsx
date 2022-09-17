import PropTypes from 'prop-types';
import { FilterBox } from './Filter.styled';
import { FormParagraph, FormInput } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ handleSetFilterValue }) => {
    return (
        <FilterBox>
            <FormParagraph>Find contacts</FormParagraph>
            <FormInput type="text" onChange={ handleSetFilterValue } />
        </FilterBox>
    )
}

Filter.propTypes = {
    handleSetFilterValue: PropTypes.func.isRequired,
};