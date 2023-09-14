import { Agents, AgentsText, Box, BrokerBoxContainer, BuyersContainer, Coming, ComingSoonContainer, ForBuyers, ForBuyersText, ForText, GetBtn, Header1, Header2, Img2container, ImgContainer, LandingPageContainer, Line, Line2, Offers, Provides, Rec1, Rec25, Rec28, Rec29, Rectangle24, SmallContainer, Soon, StreamliningContainer, StreamliningHeader, Text, Why, WhyContainer, WhyText } from '@/styles/LandingPage';
import React from 'react';


const LandingPage = () => {
  return (
    <LandingPageContainer>
        <StreamliningContainer>
            <StreamliningHeader>Broker Box; Streamlining Property Listing and Matching</StreamliningHeader>
        </StreamliningContainer>
        <BrokerBoxContainer>
        <Header1>BROKERBOX</Header1>
        <Header2>ABOUT BROKER BOX</Header2>
        <SmallContainer>
            <Line></Line>
            <Text>Broker Box is a one platform solution that aims to bridge the gap between property owners, developers, real estate agents/agencies, and buyers, creating an efficient and streamlined process for property listing and matching.</Text>
            <Line2></Line2>
        </SmallContainer>
        </BrokerBoxContainer>
        <WhyContainer>
            <Why>Why use Broker Box?
            <WhyText>why use broker box</WhyText>
            </Why>
            <Rec1>
                <ForText>For Real Estate
          Developers</ForText>
          <Offers>Broker Box offers a lightning-fast solution to get your properties out there, in front of the right audience, at the speed of light. No more waiting, no more delays  your projects deserve to shine, and Broker Box ensures they do, instantly.</Offers>
          <Rectangle24></Rectangle24>
            </Rec1>
            <Rec25>
                <ImgContainer></ImgContainer>
                <Agents>
                    <AgentsText>For Real Estate
    Agents/brokers</AgentsText>
                    <Box>Broker Box is your ultimate tool for effortless property sourcing, available anytime, anywhere. It serves as an expansive marketplace, granting you unlimited access to listings and providing new agents a seamless entry into the dynamic world of real estate.</Box>
                </Agents>
            </Rec25>
            <BuyersContainer>
                <ForBuyers>
                    <ForBuyersText>For Buyers
          </ForBuyersText>
                    <Provides>Broker Box provides a direct connection to homeowners, eliminating delays and the burden of agent viewing fees.</Provides>
                </ForBuyers>
                <Img2container></Img2container>
            </BuyersContainer>
        </WhyContainer>
        <ComingSoonContainer>
            <Coming>COMING</Coming>
            <Rec28></Rec28>
            <Rec29></Rec29>
            <Soon>SOON</Soon>
            <GetBtn>Get In touch to know more!</GetBtn>
        </ComingSoonContainer>
    </LandingPageContainer>
  )
}

export default LandingPage;