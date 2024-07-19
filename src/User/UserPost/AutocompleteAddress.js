import React, { useState } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './Autocomplete.module.scss'; 

const cx = classNames.bind(styles);

const AutocompleteAddress = () => {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setAddress(value);

    if (value.length > 0) { 
      const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json`, {
        params: {
          access_token: 'pk.eyJ1Ijoiam9ydGJveTIiLCJhIjoiY2x5c3V6OHo0MDZqajJrcTZiazR4NXliZCJ9.Xr0DrX8meUMfk71_2jkM7g',
        },
      });

      setSuggestions(response.data.features);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setAddress(suggestion.place_name);
    setSuggestions([]);
  };

  return (
    <div className={cx("input-address")}>
      <input 
        type="text" 
        name="address" 
        value={address} 
        onChange={handleInputChange} 
        placeholder="Nhập địa chỉ..."
      />
      {suggestions.length > 0 && (
        <ul className={cx("suggestions-list")}>
          {suggestions.map((suggestion) => (
            <li 
              key={suggestion.id} 
              onClick={() => handleSuggestionClick(suggestion)}
              className={cx("suggestion-item")}
            >
              {suggestion.place_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteAddress;
