import styled from "styled-components";

export const NavbarContainer = styled.div`
position: fixed;
width: 100%;
height: 164px;
background-color: #FFFFFF;
display:flex;
justify-content: center;
z-index:20;
top:0;
overflow:hidden;

`

export const NavLogo = styled.div`
position:relative;
width:363px;
height:83px;
margin-top:11px;
display:flex;
justify-content: center;
background-image: url("Logo.svg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
@media screen and (max-width: 768px) {
height:40px;
width:200px;
margin-top:10px;
}
`
export const NavLinks = styled.div`
width:389px;
height:16px;
margin-top:110px;
display:flex;
justify-content: space-evenly;
color: #192B3F;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
@media screen and (max-width: 768px) {
  margin-top:90px;
     }
`