import { combineReducers } from 'redux'
import getTokenInfo from './getTokenInfo'
import setLoggedIn from './setLoggedIn'
import setSearchItems from './setSearchItems'

export default combineReducers({ getTokenInfo, setLoggedIn, setSearchItems });