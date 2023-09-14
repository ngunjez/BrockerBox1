import styled from "styled-components";

export const FooterContainer = styled.div`
position:relative;
width: 100%;
height: 351px;
flex-shrink: 0;
background:#FFFFFF;
`

export const Logo = styled.div`
position:absolute;
width: 363px;
height: 83px;
flex-shrink: 0;
margin-top:110px;
left:10%;
background-image:url("/Logo2.svg");
background-position:center;
background-size:cover;
background-repeat:no-repeat;
@media screen and (max-width: 768px) {
 height:34px;
 width:150px;
 margin-top:20px;
 left:100px;
     }
`

export const CompanyFrame = styled.div`
position:absolute;
left:40%;
margin-top:140px;
display: flex;
width: 89px;
height: 82px;
padding-right: 0px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 17px;
flex-shrink: 0;
@media screen and (max-width: 768px) {
    height:34px;
    width:150px;
    margin-top:150px;
    left:20px;
        }
`

export const CompanyText = styled.p`
color: #364CE5;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;

`

export const SocialsText =  styled.p`
color: #364CE5;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const Socials = styled.div`
position:absolute;
left:60%;
margin-top:140px;
display: flex;
width: 77px;
height: 103px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 13px;
flex-shrink: 0;
@media screen and (max-width: 768px) {
    height:34px;
    width:150px;
    margin-top:160px;
    left:120px;
        }
`

export const TermsText = styled.p`
color: #364CE5;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const Terms = styled.div`
position:absolute;
left:80%;
margin-top:140px;
display: flex;
width: 136px;
height: 82px;
padding-bottom: 0px;
flex-direction: column;
align-items: flex-start;
gap: 15px;
flex-shrink: 0;
@media screen and (max-width: 768px) {
    height:34px;
    width:150px;
    margin-top:122px;
    left:210px;
        }
`

export const Copyright = styled.p`
position:absolute;
left:48%;
margin-top:310px;
color: #262833;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
@media screen and (max-width: 768px) {
margin-top:300px;
display:flex;
flex-direction:column;
white-space:nowrap;
left:20%;
 }
`