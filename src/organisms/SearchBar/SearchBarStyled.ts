import styled from 'styled-components'

export const BoxInput = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color: white;
width: 80%;
height: 40px;
box-sizing:border-box;
border-radius:24px;
padding-left: 14px;

input{
    flex:9;
    outline:none;
    border:none;
    height:100%;
    padding:0;
    border-radius: 24px 0 0 24px ;
    background-color: none;
}
button{
    flex:1;
    outline:none;
    border:none;
    height:100%;
    padding:0;
    margin:0;
    border-radius: 0 16px 16px 0 ;
    background-color:#141414;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
}
`