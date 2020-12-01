import { GET_SEARCH_ITEMS } from "./type"
import axios from 'axios'

const setSearchItems = (searchItems: any) => ({ type: GET_SEARCH_ITEMS, searchItems: searchItems })


export const getSearch = (searched: string) => (dispatch: any) => {
    const token = localStorage.getItem('token')
    axios(`https://api.spotify.com/v1/search?q=${searched}&type=track,artist`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    }).then(res => {
        dispatch(setSearchItems(res.data))
    })
}