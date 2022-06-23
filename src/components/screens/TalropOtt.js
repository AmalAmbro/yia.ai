import React from 'react'
import styled from 'styled-components'
import googleplay from '../../assets/green-and-play.svg'
import appstore from '../../assets/green-app-play.svg'
import mobileapp from '../../assets/mobile-app.png'

export default function TalropOtt() {
  return (
    <TalropBackground className='wrapper' style={{backgroundImage: `url("https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/tefun/28-01-2022/lines-bg.svg")`}}>
      <TalropLeft>
          <TalropLeftHead>Get started right now with TallRope's OTT Community Platform for free!</TalropLeftHead>
          <TalropLeftP>With Tefun, the wonderful world of technology is here for you. Download yia.ai mobile app to make tech-learning even easier .</TalropLeftP>
          <TalropStore>
            <Appstore>
              <AppstoreImg src={appstore} alt=''/>
            </Appstore>
            <GooglePlay>
              <GooglePlayImg src={googleplay} alt=""/>
            </GooglePlay>
          </TalropStore>
        </TalropLeft>
        <TalropRight>
          <TalropRightIimg src={mobileapp} alt=""/>
        </TalropRight>
    </TalropBackground>
  )
}

const TalropBackground = styled.section`
  background-color: rgb(243, 249, 235);
  background-repeat: no-repeat;
  background-size:700px ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  position: relative;
  height: 450px;
  @media screen and (max-width:960px){
    height: 350px;
  }
`
const TalropLeft = styled.div`
  width: 52%;
  margin-left: 80px;
  @media screen and (max-width:960px){
    width: 40%;
  }
`

const TalropRight = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom:-120px;
  @media screen and (max-width:960px){
    width: 450px;
    bottom:-90px;
  }
  @media screen and (max-width:720px){
    width: 350px;
    bottom:20px;
  }
`

const TalropRightIimg = styled.img`
  width: 100%;
`

const TalropLeftHead = styled.h1`
  width: 80%;
  color: #222;
  @media screen and (max-width:960px){
    font-size: 20px;
  }
  @media screen and (max-width:720px){
    font-size: 17px;
  }
`

const TalropLeftP = styled.p`
  width: 80%;
  font-size: 23px;
  color: #555;
  @media screen and (max-width:960px){
    font-size: 18px;
  }
  @media screen and (max-width:720px){
    font-size: 16px;
    margin-bottom: 10px;
  }
`
const TalropStore = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  @media screen and (max-width:960px){
    width: 60%;
  }
`

const Appstore = styled.div`
  width: 48%;
  @media screen and (max-width:960px){
    width: 80px;
  }
`

const AppstoreImg = styled.img`
  width: 100%;
`

const GooglePlay = styled(Appstore)`

`

const GooglePlayImg = styled(AppstoreImg)`

`


