import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import "./Search.scss";

const Search = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [region, setRegion] = useState("");

  const hadnleKey = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchValue);
    }
  };

  useEffect(() => {
    handleSearch(searchValue, region);

    // eslint-disable-next-line
  }, [searchValue, region]);

  return (
    <div className='search'>
      <div className='search__container container'>
        <div className='search__content'>
          <div className='search__input__container'>
            <IoSearch className='search__icon' />
            <input
              className='search__input'
              type='search'
              name=''
              id='1'
              placeholder='Search for a country...'
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              onKeyDown={hadnleKey}
            />
          </div>
          <div className='search__select__container'>
            <select
              className='search__select'
              value={region}
              onChange={(e) => setRegion(e.target.value)}>
              <option value=''>Filter by Region</option>
              <option className='search__option' value='Africa'>
                Africa
              </option>
              <option className='search__option' value='America'>
                America
              </option>
              <option className='search__option' value='Asia'>
                Asia
              </option>
              <option className='search__option' value='Europe'>
                Europe
              </option>
              <option className='search__option' value='Oceania'>
                Oceania
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Search };
