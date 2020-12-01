import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAuthorizeHref } from '../../oauthConfig';
import { getHashParams, removeHashParamsFromUrl } from '../../utils/hashUtils';
import { setTokenInfo, setLoggedIn } from '../../redux/actions/login'
import spotifyLogo from '../../assets/images/spotify-logo-white.png'
import SimpleTemplate from '../../templates/SimpleTemplate';

import {
    LogoBox,
    SpotifyButton
} from './LoginPageStyled'

const LoginPage = () => {

    const token = useSelector((state: any) => state.getTokenInfo.tokenInfo)
    const dispatch = useDispatch()
    const { hash } = useLocation()
    const hashParams = getHashParams(hash)
    const access_token = hashParams.access_token;
    removeHashParamsFromUrl()

    useEffect(() => {
        if (access_token !== undefined) {
            dispatch(setTokenInfo(hashParams))
            dispatch(setLoggedIn(true))
        }
    }, [dispatch, token, access_token, hashParams])

    return (
        <SimpleTemplate>
            <LogoBox>
                YUMUSIC
            </LogoBox>
            <SpotifyButton
                onClick={() => window.open(getAuthorizeHref(), '_self')}
            >
                Entre com <img src={spotifyLogo} alt="logo do spotify" />
            </SpotifyButton>
        </SimpleTemplate>
    )
}

export default LoginPage
