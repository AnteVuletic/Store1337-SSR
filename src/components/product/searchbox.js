import React from 'react';

const SearchBox = ({searchChange}) =>{
    return(
        <input className="flex center pa2" type='search' placeholder='Search products' onChange={searchChange}/>
    );
}
export default SearchBox;
