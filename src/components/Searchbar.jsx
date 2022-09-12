import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import {StylizedForm} from './Searchbar.styled'





export const Searchbar = ({ handleFormSubmit }) => {
  return (
    
      <StylizedForm  onSubmit={handleFormSubmit}>
        <input
          name="inputValue"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"        
        />
        <button type="submit" >
        <FcSearch style={{ width: 20, height: 20 }} />
        </button>
      </StylizedForm>
    
  );
};

Searchbar.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

 