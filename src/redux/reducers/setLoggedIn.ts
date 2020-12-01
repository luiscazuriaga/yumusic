import { SET_LOGGED_IN } from '../actions/type'

const defaultState = { loggedIn: false }

const setLoggedIn = (state = defaultState, actions: any) => {
    switch (actions.type) {
        case SET_LOGGED_IN:
            return {
                ...state,
                loggedIn: actions.loggedIn
            };

        default:
            return state
    }
}

export default setLoggedIn;