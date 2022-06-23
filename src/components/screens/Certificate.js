import React from 'react'
import styled from 'styled-components'
import certificate from '../../assets/certificate.png'
import medal from '../../assets/medal+.svg'
import arrow from '../../assets/arrow.svg'

export default function Certificate() {
  return (
    <CetificateWrapper>
        <CetificateBackground>
            <CetificateBackgroundLeft>
                <CertificateMedal>
                    <CertificateMedalImg src={medal} alt=""/>
                </CertificateMedal>
                <CertificateHeading>Certification</CertificateHeading>
                <CertificateParagraph>പ്രോഗ്രാം പൂർത്തിയാക്കുന്ന എല്ലാ വിദ്യാർത്ഥികൾക്കും സ്കൂൾ ലോഗോയോടു കൂടിയ കംപ്ലീഷൻ സർട്ടിഫിക്കറ്റുകൾ.</CertificateParagraph>
            </CetificateBackgroundLeft>
            <CetificateBackgroundRight>
                <CertificateDiv>
                    <CertificateImg src={certificate} alt=""/>
                </CertificateDiv>
                <CertificateSpan>
                    <CertificateArrow src={arrow} alt=""/>
                </CertificateSpan>
            </CetificateBackgroundRight>
        </CetificateBackground>
    </CetificateWrapper>
  )
}


const CetificateWrapper = styled.section`
    width: 85%;
    margin: 0 auto 150px auto;
`

const CetificateBackground = styled.section`
    width: 100%;
    height: 300px;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 100%);
    border-radius: 20px;
    display: flex;
    justify-content:space-around;
    align-items: center;
    position: relative;
    @media screen and (max-width:720px){
        flex-wrap: wrap;
        height: 450px;
    }
`
const CetificateBackgroundLeft = styled.div`
    position: relative;
    width: 45%;
    height: 50%;
    padding-left: 20px;
    @media screen and (max-width:720px){
        width: 80%;
        margin: 0;
    }
`

const CertificateMedal = styled.span`
    display: block;
    width: 60px;
    height: 60px;
    position: absolute;
    top: -75px;
    left: 20px;
    @media screen and (max-width:720px){
        top: -13px;
        width: 30px;
    }
`
const CertificateMedalImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
`

const CetificateBackgroundRight = styled.div`
    position: relative;
    width: 45%;
    height: 45%;
    @media screen and (max-width:960px){
        width: 40%;
    }
`
const CertificateHeading = styled.h1`
    color: #fff;
    font-size: 43px;
    font-weight: 500;
    margin: 0 0 10px 0;
    @media screen and (max-width:720px){
        font-size: 24px;
        margin-top: 40px;
    }
`

const CertificateParagraph = styled.p`
    font-size:18px;
    margin: 0;
    width: 80%;
    color: #fff;
    @media screen and (max-width:720px){
        font-size: 18px;
    }
`

const CertificateDiv = styled.div`
    position: absolute;
    width: 600px;
    height: 450px;
    bottom: -150px;
    right: 100px;
    @media screen and (max-width:1200px){
        width: 500px;
        height: 400px;
        right: 80px;
        bottom: -130px;
    }
    @media screen and (max-width:960px){
        width: 480px;
        height: 350px;
        right: -20px;
        bottom: -110px;
    }

    @media screen and (max-width:720px){
        width: 480px;
        height: 350px;
        left:-120px;
        bottom: -100px;
        transform: rotate(-2.5deg);
    }

`
const CertificateImg = styled.img`
    width: 100%;
    height: 100%;
`
const CertificateSpan = styled.span`
    position: absolute;
    width: 200px;
    height: 200px;
    left: -220px;
    bottom: -220px;
    @media screen and (max-width:1200px){
        width: 150px;
        left: -180px;
    }
    @media screen and (max-width:960px){
        width: 100px;
        left: -180px;
        bottom: -200px;
    }
    @media screen and (max-width:720px){
        display: none;
    }
`
const CertificateArrow = styled.img`
    width: 100%;
    height: 100%;
    
`