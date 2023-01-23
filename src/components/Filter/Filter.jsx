import PropTypes from 'prop-types';
import { FilterContainer, Field } from './Filter.styled';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <FilterContainer>
      Find contacts by name
      <Field
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder=" enter contact"
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
