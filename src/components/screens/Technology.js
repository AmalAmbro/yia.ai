import React from 'react'
import styled from 'styled-components'
import ai from '../../assets/ai.jpg'
import robotics from '../../assets/robotics.jpg'
import metaverse from '../../assets/meta.jpg'
import P3d from '../../assets/3d.jpg'
import Web3 from '../../assets/web3.jpg'
import arvr from '../../assets/ar&vr.jpg'
import iot from '../../assets/iot.jpg'
import driverlescars from '../../assets/car.jpg'
import card from '../../assets/card.svg'


export default function Technology() {
  return (
    <TechWrapper>
        <TechHeading>പുതിയ ടെക്ക്നോളജികൾ മനസ്സിലാക്കാം</TechHeading>
        <TechExplanation>ടെക്ക്-പഠനം വേറിട്ടതും, ക്രിയാത്മകവുമാക്കാൻ കഴിയുന്ന സിലബസ്.</TechExplanation>
        <TechUl>
            <TechLi className='b1'>
                <TechDiv>
                    <TechImg src={ai} alt=""/>
                </TechDiv>
                <TechLiHeading>Artificial Intelligence</TechLiHeading>
            </TechLi>
            <TechLi className='b2'>
                <TechDiv>
                    <TechImg src={robotics} alt=""/>
                </TechDiv>
                <TechLiHeading>Robotics</TechLiHeading>
            </TechLi>
            <TechLi className='b1'>
                <TechDiv>
                    <TechImg src={metaverse} alt=""/>
                </TechDiv>
                <TechLiHeading>Metaverse</TechLiHeading>
            </TechLi>
            <TechLi className='b3'>
                <TechDiv>
                    <TechImg src={P3d} alt=""/>
                </TechDiv>
                <TechLiHeading>3D Printing</TechLiHeading>
            </TechLi>
            <TechLi className='b2'>
                <TechDiv>
                    <TechImg src={Web3} alt=""/>
                </TechDiv>
                <TechLiHeading>Web 3.0</TechLiHeading>
            </TechLi>
            <TechLi className='b1'>
                <TechDiv>
                    <TechImg src={arvr} alt=""/>
                </TechDiv>
                <TechLiHeading>AR & VR </TechLiHeading>
            </TechLi>
            <TechLi className='b1'>
                <TechDiv>
                    <TechImg src={iot} alt=""/>
                </TechDiv>
                <TechLiHeading>IoT</TechLiHeading>
            </TechLi>
            <TechLi className='b3'>
                <TechDiv>
                    <TechImg src={driverlescars} alt=""/>
                </TechDiv>
                <TechLiHeading>Driverless Cars</TechLiHeading>
            </TechLi>
            <TechTopics>
                <TechCard src={card} alt=""/>
            </TechTopics>
        </TechUl>
    </TechWrapper>
  )
}

const TechWrapper = styled.section`
    width:85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TechHeading = styled.h1`
    font-size: 25px;
    margin: 0 0 20px 0;
    color: rgb(16,167,111);
    @media screen and (max-width:960px){
        font-size: 23px;
    }
    @media screen and (max-width:720px){
        font-size: 18px;
    }
`

const TechExplanation = styled.h2`
    font-size: 25px ;
    display: inline-block;
    width: 35%;
    font-weight: 300;
    text-align: center;
    @media screen and (max-width:1200px){
        font-size: 23px;
    }
    @media screen and (max-width:960px){
        font-size: 20px;
    }
    @media screen and (max-width:720px){
        width: 40%;
        font-size: 18px;
    }
`
const TechUl = styled.ul`
    list-style: none;
    width: 95%;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    margin-bottom: 80px;
`

const TechLi = styled.li`
    width: 24%;
    height: 12%;
    display: flex;
    flex-direction: column;
    padding-top: 18px;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 17px;
    &.b1{
        background-color: rgb(227, 244, 230);
    }
    &.b2{
        background-color: rgb(255, 248, 228);
    }
    &.b3{
        background-color: rgb(239, 234, 250);
    }

    @media screen and (max-width:960px){
        width: 30%;
        &:nth-child(8){
            margin-right: auto;
            margin-left: 40px;
        }
    }
    @media screen and (max-width:720px){
        width: 48%;
        &:nth-child(8){
            margin-right: 0;
            margin-left: 0;
        }
    }
`

const TechDiv = styled.div`
    width: 250px;
    max-height: 170px;
    margin: 0 auto;
    border-radius: 15px;
    overflow: hidden;
    @media screen and (max-width:1200px){
        width: 200px;
        height: 140px;
    }
    @media screen and (max-width:720px){
        width: 250px;
        height: 140px;
    }
`

const TechImg = styled.img`
    width: 100%;
    height: 100%;
    display: block;
`

const TechLiHeading = styled.h3`
    color: #333;
    margin-bottom: 20px;
`

const TechTopics = styled.div`
    position: absolute;
    width: 250px;
    height: 250px;
    bottom: -80px;
    right: -110px;
    @media screen and (max-width:1200px){
        width: 180px;
        height: 180px;
        bottom: -80px;
        right: -100px;
    }
    @media screen and (max-width:960px){
        right: 160px;
        bottom: -60px;
    }
    @media screen and (max-width:720px){
        right: -50px;
        bottom: -40px;
        width: 120px;
        height: 120px;
    }
`
const TechCard = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    
`