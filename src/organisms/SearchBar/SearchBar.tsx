import React from 'react';
import { RiSearchLine } from 'react-icons/ri'

import { BoxInput } from './SearchBarStyled'

interface Props {
    setSearch: (value: string) => void;
    setSearchItems: () => void;
}

const SearchBar = ({ setSearch, setSearchItems }: Props) => {

    return (
        <BoxInput>
            <input onChange={({ target }) => setSearch(target.value)} />
            <button onClick={() => setSearchItems()}><RiSearchLine /></button>
        </BoxInput>
    )
}


export default SearchBar

