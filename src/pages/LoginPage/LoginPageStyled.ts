import styled from 'styled-components'

export const SpotifyButton = styled.button`
display:flex;
justify-content:space-evenly;
align-items:center;
background: var(--spotify-green);
border-radius:24px;
width:80%;
height: 50px;
outline:none;
border:none;
-webkit-box-shadow: -1px 7px 15px 2px rgba(0,0,0,0.6);
-moz-box-shadow: -1px 7px 15px 2px rgba(0,0,0,0.6);
box-shadow: -1px 7px 15px 2px rgba(0,0,0,0.6);
font-family: 'Montserrat',sans-serif;
font-weight: 700;
font-size:1rem;
transition: 0.2s;
color: white;

img{
width:50%;
height:80%;
}

&:hover{
    transform: scale(1.1)
}

@media(min-width:768px){
height: 120px;
font-size:2rem;
border-radius:55px;

}

@media(min-width:1024px){
height: 150px;
font-size:2.2rem;
}
`
export const LogoBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:50%;
height: 200px;
font-family: 'Poppins',sans-serif;
font-weight: 700;
font-size:4rem;
color: white;


@media(min-width:768px){
    font-size:8rem;
}

@media(min-width:1024px){
height: 150px;
font-size:11rem;
}
`