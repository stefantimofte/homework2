import React from 'react'
import './search-input.scss'

const SearchInput = () => {
    return (
        <div className="search-input">
            <input style={{ height: "40px", width: "70%" }} placeholder="Search by name"></input>
        </div>
    )
}

export default SearchInput;