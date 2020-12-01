import React from 'react'
import { RiHomeLine, RiPlayListLine, RiUserLine, RiSearchLine } from 'react-icons/ri';
import FooterButton from '../../atoms/FooterButton';
import { useHistory } from 'react-router-dom';

import { BoxButtons } from './FooterButtonsStyled'

const FooterButtons = () => {
    const history = useHistory()

    return (
        <BoxButtons>
            <FooterButton onClick={() => history.push("/")}>
                <RiHomeLine />
                <p>Home</p>
            </FooterButton>
            <FooterButton onClick={() => history.push("/playlist")}>
                <RiPlayListLine />
                <p>Playlist</p>
            </FooterButton>
            <FooterButton onClick={() => history.push("/search")}>
                <RiSearchLine />
                <p>Search</p>
            </FooterButton>
            <FooterButton onClick={() => history.push("/profile")}>
                <RiUserLine />
                <p>Profile</p>
            </FooterButton>
        </BoxButtons>
    )
}

export default FooterButtons;

