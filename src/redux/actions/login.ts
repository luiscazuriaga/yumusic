import { GET_TOKEN, SET_LOGGED_IN } from "./type"

export const setTokenInfo = (tokenInfo: any) => {
    localStorage.setItem('token', tokenInfo.access_token)
    return { type: GET_TOKEN, tokenInfo: tokenInfo }
}

export const setLoggedIn = (loggedIn: boolean) => ({ type: SET_LOGGED_IN, loggedIn: loggedIn })


