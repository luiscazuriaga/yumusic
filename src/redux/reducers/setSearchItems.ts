import { GET_SEARCH_ITEMS } from '../actions/type'

const defaultState = { searchItems: {} }

const setSearchItems = (state = defaultState, actions: any) => {
    switch (actions.type) {
        case GET_SEARCH_ITEMS:
            return {
                ...state,
                searchItems: actions.searchItems
            };

        default:
            return state
    }
}

export default setSearchItems;