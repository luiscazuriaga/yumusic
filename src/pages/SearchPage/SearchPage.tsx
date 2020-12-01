import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import SearchBar from '../../organisms/SearchBar/SearchBar';
import Showcase from '../../organisms/Showcase/Showcase';
import { getSearch } from '../../redux/actions/searchItems';
import SearchPageTemplate from '../../templates/SearchPageTemplate';


const SearchPage = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")

    const setSearchItems = () => {
        dispatch(getSearch(search))
    }

    return (
        <SearchPageTemplate>
            <SearchBar setSearch={setSearch} setSearchItems={setSearchItems} />
            <Showcase />
        </SearchPageTemplate>
    )
}

export default SearchPage;