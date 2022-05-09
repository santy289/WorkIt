/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchTitleThunk, getAllServicesThunk } from '../../store/actions';
import './Filter.styles.scss';

function Filter() {
  const dispatch = useDispatch();
  const [enable, setEnable] = useState(false);
  const [search, setSearch] = useState('');

  const handleChange = (evt) => {
    setSearch(evt.target.value);
    setEnable(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      dispatch(getAllServicesThunk());
      setEnable(false);
    } else {
      dispatch(SearchTitleThunk(search));
    }
  };
  const handleClear = () => {
    dispatch(getAllServicesThunk());
    document.getElementById('name').value = '';
  };

  return (
    <div className="container">
      <p>
        Buscar
      </p>
      <div className="form__group field">
        <input
          type="text"
          className="form__field"
          placeholder="Buscar"
          name="name"
          id="name"
          onChange={handleChange}
        />
        <button type="submit" className={enable ? 'form__submit--button' : 'disabled'} onClick={handleSubmit}>Buscar</button>
        <button type="button" className={enable ? 'form__submit--button' : 'disabled'} onClick={handleClear}>Reset</button>
      </div>
    </div>
  );
}

export default Filter;
