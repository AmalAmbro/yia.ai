import React from 'react'
import { Link } from 'react-router-dom'
import tefun from '../../assets/Tefun-logo.svg'
import tilt from '../../assets/spot-min.jpeg'
import arrow from '../../assets/arrow.svg'
import commercial from "../../assets/640.svg"
import playstoreDark from '../../assets/grey-and-play.svg'
import appstoreDark from '../../assets/grey-app-play.svg'
import styled from 'styled-components'

export default function Introduction() {
  return (
    <Wrapper>
        <Grey>
          <Left>
            <Tefun><Timg src={tefun}/></Tefun>
            <Heading>Technology Fundamental Program</Heading>
            <Heading2>കേരളത്തിലെ <Green>20 ലക്ഷം</Green> സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് സൗജന്യമായി ടെക്ക്നോളജി പഠിക്കാം!</Heading2>
            <Paragraph>ടാൽറോപ്പിന്റെ OTT കമ്യൂണിറ്റി പ്ലാറ്റ്ഫോമായ 'യായ്'-ലൂടെ തികച്ചും സൗജന്യമായി ഇപ്പോൾ തന്നെ പഠനം ആരംഭിക്കൂ.</Paragraph>
            <Paragraph2>Tefun-ലൂടെ ടെക്ക്നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ എളുപ്പമാക്കാൻ 'yiaai' മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.</Paragraph2>
            <Commercial><Commercialimage src={commercial} alt=""/></Commercial>
            <Buttons>
              <JoinButton to="/">Join for free</JoinButton>
              <Registerbutton to="/">
                <Register>
                  <Regtext>Register school</Regtext>
                </Register>
              </Registerbutton>
            </Buttons>
          </Left>
          <Right>
            <Tilt>
              <Tiltimage src={tilt} alt=""/>
            </Tilt>
            <Arrow>
              <Arrowimage src={arrow} alt=""/>
            </Arrow>
            <Storelinks>
              <Playstore to="https://play.google.com/store/apps/details?id=com.yiaai">
                <PlaystoreImage src={playstoreDark} alt="" />
              </Playstore>
              <Appstore to="https://apps.apple.com/in/app/yiaai-ott-community-platform/id1609634713">
                <AppstoreImage src={appstoreDark} alt="" />
              </Appstore>
            </Storelinks>
          </Right>
          <Bottom>

          </Bottom>
        </Grey>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 95%;
  margin: 105px auto 100px auto;
`
const Grey = styled.div`
  background-color:rgb(243, 249, 235);
  background-image:url('https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/tefun/28-01-2022/lines-bg.svg');
  width: 100%;
  border-radius: 50px;
  padding: 5% 50px;
  box-sizing: border-box;
  background-size: 1000px;
  background-repeat: no-repeat;
  background-position:left 10% top 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #333;
  margin: 0 auto;
`

const Tefun = styled.div`
  width: 200px;
  margin-bottom: 20px;
  @media screen and (max-width:960px){
    width: 120px;
  }
`

const Timg = styled.img`
  width: 100%;
`
const Left = styled.div`
  width: 47%;
`

const Heading = styled.h1`
  font-size: 27px;
  font-weight: 500;  
  margin-bottom: 10px;
  @media screen and (max-width:960px){
    font-size: 23px;
  }
`
const Green = styled.p`
  color: rgb(15, 167, 111);
  margin:0;
  display: inline-block;
`
const Heading2 = styled.h3`
  font-size: 27px;
  letter-spacing: 0px;
  margin-bottom: 10px;
  @media screen and (max-width:960px){
    font-size: 18px;
  }

`
const Button = styled(Link)`
  cursor: pointer;
  display: block;
  color: #fff;
  font-size: 16px;
  padding: 15px 30px;
  border-radius: 5px;
  transition: all 0.5s ease 100ms;
  background-size: 200% !important;
  background: linear-gradient(90deg, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 50%, rgb(99, 187, 76) 100%);
  text-decoration: none;
  font-weight: 500;
  &:hover{
    background-position: 100% 200%;
  }
`

const Paragraph = styled.p`
  font-size: 18px;
  width: 90%;
  margin-bottom: 10px;
  @media screen and (max-width:960px){
    font-size: 15px;
  }

`
const Paragraph2 = styled(Paragraph)`
  margin-bottom: 0px;
`

const Right = styled.div`
  width: 50%;
  position: relative;
`

const Tilt = styled.div`
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  transform: rotate(2deg);
  @media screen and (max-width:960px){
    position: relative;
    top: 80px;
  }
`

const Tiltimage = styled.img`
  width: 100%;
`

const Arrow = styled.div`
  width:25%;
  position: absolute;
  left:-100px;
  bottom:190px;
  @media screen and (max-width:960px){
    left: -50px;
  }
  @media screen and (max-width:720px){
    left: -20px;
    bottom:320px;
  }
`

const Arrowimage = styled.img`
  width:100%;
`

const Bottom = styled.div`
  width: 100%;
`

const Commercial = styled.div`
  width: 80%;
  margin-top:50px;
`

const Commercialimage = styled.img`
  width:100%;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width:550px;
  margin-top: 20px;
  @media screen and (max-width:960px){
    width: 380px;
  }

  @media screen and (max-width:960px){
    width: 250px;
  }
`

const JoinButton = styled(Button)`
  height:50px;
  width: 40%;
  font-size: 20px;
  padding: 12px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  @media screen and (max-width:960px){
    width: 120px;
    font-size: 18px;
    height:35px
  }
  @media screen and (max-width:720px){
    width: 80px;
    font-size: 11px;
    height:20px
  }
`

const Registerbutton = styled(JoinButton)`
  display: block;
  padding: 3px;
  width: 46%;
  height: 70px;
  @media screen and (max-width:960px){
    width: 180px;
    font-size: 18px;
    height:50px
  }
  @media screen and (max-width:720px){
    width: 120px;
    height:40px
  }
`

const Register = styled.div`
  width: 100%;
  display:flex;
  justify-content:center;
  height:100%;
  background-color: #fff;
  font-size:20px;
  text-align: center;
  align-items: center;
  border-radius: 12px;
  @media screen and (max-width:960px){
    font-size: 18px;
  }
  @media screen and (max-width:720px){
    font-size: 13px;
  }
`

const Regtext = styled.p`
  color: rgb(15, 167, 111);
`

const Storelinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: flex-end;
  position:absolute;
  bottom:0px;
  @media screen and (max-width:960px){
    height: 60px;
    width: 400px;
    justify-content: end;
  }
  @media screen and (max-width:720px){
    height: 60px;
    width: 250px;
    justify-content: space-between;
    bottom: 250px;
  }
`

const Appstore = styled(Link)`
  display:block;
  width: 180px;
  height: 60px;
  @media screen and (max-width:960px){
    height: 100%;
  }
`

const Playstore = styled(Appstore)`

`

const PlaystoreImage = styled.img`
  width:100%;
  height:100%;
`
const AppstoreImage = styled.img`
  width: 100%;
  height: 100%;
`
