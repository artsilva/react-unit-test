import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

const SearchInput = ({ onChange, label, placeholder }) => {
  const [searchInput, setSearchInput] = useState('')

  const changeHandler = (event) => {
    setSearchInput(event.target.value)
    onChange(event.target.value)
  }

  return (
    <div className={`search-input-container primary`}>
      <p className='input-title'>{label}</p>
      <div className='input-container'>
        <input
          type='text'
          placeholder={placeholder}
          value={searchInput}
          onChange={changeHandler}
        />
      </div>
    </div>
  )
}

SearchInput.propTypes = {
  onSearch: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

export default SearchInput
