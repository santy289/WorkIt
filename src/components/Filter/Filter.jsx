import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchTitleThunk, getAllServicesThunk } from '../../store/actions';
import './Filter.styles.scss';

function Filter() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SearchTitleThunk(search));
  };
  const handleClear = () => {
    dispatch(getAllServicesThunk());
  };

  return (
    <div className="container">
      <p>
        Buscar
      </p>
      <div className="form__group field">
        <input type="input" className="form__field" placeholder="Buscar" name="name" id="name" onChange={handleChange} />
        <button type="submit" className="form__submit" onClick={handleSubmit}>Buscar</button>
        <button type="button" onClick={handleClear}>Reset</button>
      </div>
    </div>
  );
}

export default Filter;
