import styled from "styled-components";


export const LandingPageContainer = styled.div`
position:relative;
width:100%;
min-height:100vh;
fill: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 28.65%, #192B3F 93.75%);
z-index-20px;
`
export const StreamliningContainer = styled.div`
position:relative;
width:100%;
height:676px;
margin-top:158px;
display:flex;
flex-direction; column;
justify-content:center;
background-image: url("/Rectangle2.svg");
background-position:center;
background-size:cover;
background-repeat:no-repeat;
`
export const StreamliningHeader = styled.p`
position:absolute;
margin-top:439px;
color: #FFF;
font-family: Roboto;
font-size: 56px;
font-style: normal;
font-weight: 300;
line-height: 150%; /* 84px */
letter-spacing: -1.232px;
@media screen and (max-width: 768px) {
    font-size:40px;
    width:100%;
    }
`

export const BrokerBoxContainer = styled.div`
position:relative;
width:100%;
height:487px;
background: #364CE5;
`

export const Header1 = styled.p`
position:absolute;
display:flex;
font-color: FFF;
font-family: Roboto;
font-size: 137px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top:123px;
padding: 74px 74px;
// text-shadow: 2px 2px 4px rgba(555, 255, 255, 0.2); 
  color: transparent;
   -webkit-text-stroke: 8px #FFFFFF;
    -webkit-text-stroke-width: 0.2px;
    white-space: pre-line;
  @media screen and (max-width: 768px) {
   font-size:55px;
   display:flex;
   right:-14%;
   margin-top:-40px;
    }
`

export const Header2 = styled.p`
position:absolute;
margin-top:200px;
padding: 92px 270px;
color: #FFF;
dispaly:flex;
font-family: Roboto;
font-size: 49px;
font-style: normal;
font-weight: 400;
line-height: normal;
  @media screen and (max-width: 768px) {
    margin-top:-20px;
    font-size:20px;
    display:flex;
    flex-direction:column;
    text-align:center;
    white-space: nowrap;
    right:-50%;
     }
`

export const SmallContainer = styled.div`
position:absolute;
display: flex;
width: 371px;
height: 259px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 30px;
margin-top:134px;
margin-left:65%;
@media screen and (max-width: 768px) {
right:1%;
justify-content: center;
align-items: center;
}
`

export const Line = styled.div`
position:absolute;
width: 363px;
height: 1px;
background: #FFF;
bottom:0;
@media screen and (max-width: 768px) {
    width:300px;
    left:10%;
}
`

export const Line2 = styled.div`
position:absolute;
width: 363px;
height: 1px;
background: #FFF;
top:0;
@media screen and (max-width: 768px) {
    width:300px;
    left:10%;
}
`

export const Text = styled.p`
width: 371px;
height: 199px;
flex-shrink: 0;
color: #FFF;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 30px */
letter-spacing: -0.44px;
@media screen and (max-width: 768px) {
    height:100px;
    width:250px;
    font-size:16px;
    margin-top:-80px;
}
`

export const WhyContainer = styled.div`
position:relative;
width:100%;
height:2521px;
background:#FFFFFF;
@media screen and (max-width: 768px) {
align-items:center;
justify-content:center;
     }
`

export const Why = styled.div`
position:absolute;
left:10%;
width: 1564px;
height: 162px;
fonr-color:#262833;
font-family: Inter;
font-size: 126px;
font-style: normal;
font-weight: 700;
line-height: 150%; 
letter-spacing: -2.772px;
text-transform: uppercase;
font-color:#262833;
color:transparent;
   -webkit-text-stroke: 8px #262833;
    -webkit-text-stroke-width: 0.5px;
    white-space: pre-line;
@media screen and (max-width: 768px) {
    font-size:30px;
    display:flex;
    flex-direction:column;
    margin-top:-4px;
     }
`
export const WhyText = styled.div`
position:absolute;
margin-top:-75px;
margin-left:34%;
color: #262833;
font-family: Roboto;
font-size: 47px;
font-style: normal;
font-weight: 500;
line-height: normal;

@media screen and (max-width: 768px) {
    top:50%;
    font-size:60px;
    display:flex;
    flex-direction:column;
    text-align:center;
    justify-content:center;
    white-space: nowrap;
    left:0;
     }
`

export const Rec1 = styled.div`
position:relative;
margin-top:282px;
display: inline-flex;
height: 648px;
width:80%;
margin-left:160px;
justify-content: center;
align-items: center;
gap: 83px;
flex-shrink: 0;

     
`

export const ForText = styled.p`
position:absolute;
display:flex;
flex-direction:column;
align-items:flex-start;
top:70px;
left:0;
width: 560px;
color: #364CE5;
font-family: Roboto;
font-size: 65px;
font-style: normal;
font-weight: 300;
line-height: 150%; 
letter-spacing: -1.43px;
@media screen and (max-width: 768px) {
    width:300px;
    padding-right:260px;
    margin-top:20px;
    font-size:30px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-right:100px;
    white-space: nowrap;
    margin-right:178px;
     }
`

export const Offers = styled.p`
position:absolute;
width: 480px;
height: 276px;
top:60%;
left:0;
color: #192B3F;
font-family: Proxima Nova;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 30px */
letter-spacing: -0.44px;
@media screen and (max-width: 768px) {
    width:300px;
    height:150px;
    margin-top:-230px;
    font-size:20px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin-left:-120px;
    flex-wrap:wrap;
     }
`

export const Rectangle24 = styled.div`
position:absolute;
width: 635px;
height: 648px;
border-radius: 3px;
background: url("/Rectangle 24.svg"), lightgray 50% / cover no-repeat;
right:10px;
@media screen and (max-width: 768px) {
    margin-top:-780px;
    width:320px;
    height:300px;
    display:flex;
    flex-direction:column;
    text-align:center;
    white-space: nowrap;
    right:37%;
     }
`

export const Rec25 = styled.div`
position:relative;
margin-top:125px;
display: flex;
width: 1295px;
height: 648px;
margin-left:160px;
justify-content: center;
align-items: center;
gap: 165px;
flex-shrink: 0;
`

export const ImgContainer = styled.div`
width: 635px;
height: 648px;
flex-shrink: 0;
border-radius: 3px;
background: url("/Rectangle25.svg"), lightgray 50% / cover no-repeat;
@media screen and (max-width: 768px) {
    margin-top:-1100px;
    width:80px;
    height:300px;
    display:flex;
    flex-direction:column;
    text-align:center;
    white-space: nowrap;
    padding-right:1030px;
     }
`

export const Agents = styled.div`
position:relative;
display: flex;
flex-direction:column;
width: 495px;
height: 412px;
justify-content: center;
align-items: center;
flex-shrink: 0;
gap:59px;
left:10%;
@media screen and (max-width: 768px) {
  width:300px;
  height:200px;
  margin-left:10%;
 }
`

export const AgentsText = styled.p`
position:relative;
display:flex;
flex-direction:column;
gap:10px;
width: 493px;
color: #364CE5;
font-family: Roboto;
font-size: 65px;
font-style: normal;
font-weight: 300;
line-height: 150%;
letter-spacing: -1.43px;
white-space:no-wrap;
@media screen and (max-width: 768px) {
    width:300px;
    height:200px;
    margin-left:-500px;
   }
`

export const Box = styled.p`
width: 480px;
height: 276px;
flex-shrink: 0;
color: #1E1E1E;
font-family: Proxima Nova;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 150%;
letter-spacing: -0.44px;

`

export const BuyersContainer = styled.div`
position:relative;
display: inline-flex;
height: 648px;
justify-content: center;
align-items: center;
gap: 165px;
flex-shrink: 0;
margin-top:141px;
margin-left:160px;

`

export const ForBuyers = styled.div`
display: flex;
width: 480px;
height: 221px;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
gap: 47px;
margin-top:355px;
@media screen and (max-width: 768px) {
    width:475px;
    height:200px;
    margin-left:10%;
    
   }
`

export const ForBuyersText = styled.p`
width: 312px;
height: 100px;
flex-shrink: 0;
color: #364CE5;
font-family: Roboto;
font-size: 65px;
font-style: normal;
font-weight: 300;
line-height: 150%;
letter-spacing: -1.43px;
@media screen and (max-width: 768px) {
    display:flex;
    width:300px;
    height:150px;
    padding-right:50px;
    // margin-top:1430px;
    font-size:30px;
    // align-items:center;
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin-left:-120px;
    // margin-right:1200px;
    // white-space: nowrap;
    flex-wrap:wrap;
     }
`

export const Provides = styled.p`
width: 480px;
height: 276px;
flex-shrink: 0;
color: #1E1E1E;
font-family: Proxima Nova;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 30px */
letter-spacing: -0.44px;
@media screen and (max-width: 768px) {
    width:70%;
    margin-top:-200px;
    font-size:20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-left: -140px;
     }
`

export const Img2container = styled.div`
width: 635px;
height: 648px;
border-radius: 3px;
left:20%;
position:relative;
background: url("/Rectangle26.svg"), lightgray 50% / cover no-repeat;
@media screen and (max-width: 768px) {
    margin-top:-1100px;
    width:320px;
    height:300px;
    display:flex;
    flex-direction:column;
    text-align:center;
    white-space: nowrap;
    // padding-left:1030px;
    margin-left:-815px;
     }
`

export const ComingSoonContainer = styled.div`
width: 100%;
height: 845px;
flex-shrink: 0;
background: #364CE5;
`

export const Coming = styled.div`
position:absolute;
left:10%;
margin-top:146px;
font-family: Roboto;
font-size: 110px;
font-style: normal;
font-weight: 700;
line-height: normal;
font-color:#FFFFFF;
color:transparent;
   -webkit-text-stroke: 8px #FFFFFF;
    -webkit-text-stroke-width: 0.4px;
    white-space: pre-line;
@media screen and (max-width: 768px) {
 font-size:20px;
     }
`

export const Rec28 = styled.div`
position:absolute;
width: 894px;
height: 387px;
flex-shrink: 0;
border-radius: 5px;
margin-top:269px;
left:10%;
background: url("/Rectangle28.svg"), lightgray 50% / cover no-repeat;
@media screen and (max-width: 768px) {
    // margin-top:-1100px;
    width:80px;
    height:300px;
    display:flex;
    flex-direction:column;
    text-align:center;
    white-space: nowrap;
    padding-left:1030px;
    margin-left:0;
     }
`

export const Rec29 = styled.div`
position:absolute;
margin-top:36px;
left:40%;
width: 852px;
height: 504px;
flex-shrink: 0;
border-radius: 5px;
background: url("/Rectangle29.svg"), lightgray 50% / cover no-repeat;
mix-blend-mode: soft-light;
@media screen and (max-width: 768px) {
    // margin-top:-1100px;
    width:80px;
    height:300px;
    display:flex;
    flex-direction:column;
    text-align:center;
    white-space: nowrap;
    padding-left:1030px;
    margin-left:0;
     }
`

export const Soon = styled.p`
position:absolute;
font-family: Roboto;
font-size: 110px;
font-style: normal;
font-weight: 700;
line-height: normal;
left:65%;
margin-top:540px;
font-color:#FFFFFF;
color:transparent;
   -webkit-text-stroke: 8px #FFFFFF;
    -webkit-text-stroke-width: 0.4px;
    white-space: pre-line;
@media screen and (max-width: 768px) {
  font-size:20px;
  margin-top:580px;
  margin-left:25px;
     }
`

export const GetBtn = styled.button`
position:absolute;
margin-top:734px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
left:40%;
width: 331px;
height: 47px;
flex-shrink: 0;
border-radius: 38px;
background: #FFF;
color: #364CE5;
font-family: Proxima Nova;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 30px */
letter-spacing: -0.44px;
@media screen and (max-width: 768px) {
justify-content:center;
font-size:16px;
align-items:center;
gap:0;
margin-top:700px;
left:25%;
width:180px;
height:30px;
white-space:no-wrap;
display:flex;
flex-direction:column;
     }
`