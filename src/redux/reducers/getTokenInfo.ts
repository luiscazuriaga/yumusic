import { GET_TOKEN } from '../actions/type'

const defaultState = { tokenInfo: "" }

const getTokenInfo = (state = defaultState, actions: any) => {
    switch (actions.type) {
        case GET_TOKEN:
            return {
                ...state,
                tokenInfo: actions.tokenInfo
            };

        default:
            return state
    }
}

export default getTokenInfo;
