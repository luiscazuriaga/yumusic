import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Footer from '../organisms/Footer/Footer'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PlaylistPage from '../pages/PlaylistsPage/PlaylistPage'
import SearchPage from '../pages/SearchPage/SearchPage'
import Profile from '../pages/Profile/Profile'

const Routes = () => {
    const loggedIn = useSelector((state: any) => state.setLoggedIn.loggedIn)
    return (
        <Switch>
            {!loggedIn ?
                <Route exact path="/">
                    <LoginPage />
                </Route>
                :
                <>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/playlist">
                        <PlaylistPage />
                    </Route>
                    <Route path="/search">
                        <SearchPage />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Footer />
                </>
            }
        </Switch>
    )
}

export default Routes