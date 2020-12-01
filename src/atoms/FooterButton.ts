import styled from 'styled-components'

const FooterButton = styled.div`
display:flex;
justify-content:center;
align-items: center;
flex-flow:column;
flex:1;
box-sizing:border-box;
margin: 0 5px;
height:100%;
box-sizing:border-box;
color:white;

svg{
    width:60%;
    height:60%;
}

p{
    font-family: "Poppins", sans-serif;
    font-size: 0.9rem;
    font-weight:500;
}

@media(min-width: 768px){

p{
    font-size: 1.2rem;
}
}
`

export default FooterButton