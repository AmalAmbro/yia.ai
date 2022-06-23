import React from 'react'
import styled from 'styled-components'
import greylogo from '../../assets/logo-grey.svg'
import instag from '../../assets/instagram.svg'
import insta from '../../assets/instagram-color.svg'
import fbg from '../../assets/facebook.svg'
import fb from '../../assets/facebook-color.svg'
import twitterg from '../../assets/twitter.svg'
import twitter from '../../assets/twitter-color.svg'
import linkeding from '../../assets/linkedin.svg'
import linkedin from '../../assets/linkedin-color.svg'
import youtubeg from '../../assets/youtube.svg'
import youtube from '../../assets/youtube-color.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
        <BlackFooter>
            <GreyLogoDiv>
                <GreylogoImg src={greylogo} alt=""/>
            </GreyLogoDiv>
            <SocialMediaDiv>
                <SocialMediaSpan>
                    <Icon className='secondary' src={instag} alt=""/>
                    <Icon src={insta} alt=""/>
                </SocialMediaSpan>
                <SocialMediaSpan>
                <Icon className='secondary' src={fbg} alt=""/>
                    <Icon src={fb} alt=""/>
                </SocialMediaSpan>
                <SocialMediaSpan>
                    <Icon className='secondary' src={twitterg} alt=""/>
                    <Icon src={twitter} alt=""/>
                </SocialMediaSpan>
                <SocialMediaSpan>
                    <Icon className='secondary' src={linkeding} alt=""/>
                    <Icon src={linkedin} alt=""/>
                </SocialMediaSpan>
                <SocialMediaSpan>
                    <Icon className='secondary' src={youtubeg} alt=""/>
                    <Icon src={youtube} alt=""/>
                </SocialMediaSpan>
            </SocialMediaDiv>
            <ContactDiv>
                <ContactLink href="https://wa.me/+918589998744">+91 858 999 8744</ContactLink>
                <ContactLink href="mailto:yiaai@talrop.com">yiaai@talrop.com</ContactLink>
                
            </ContactDiv>

            <LastDiv>
                <Left>
                    <Copyright>© 2022, <Links to={'https://talrop.com/'}>Talrop Private Limited</Links></Copyright>
                </Left>
                <Right>
                    <Links to={'https://yia.ai/tos/'}>Terms of service</Links>
                    <Links to={'https://yia.ai/privacy-policy/'}>Privacy Policy</Links>
                </Right>
            </LastDiv>
        </BlackFooter>
    )
}

const BlackFooter = styled.section`
    background-color: #222;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 400px;
    @media screen and (max-width:720px){
        height: 250px;
    }
`

const GreyLogoDiv = styled.div`
    width:6%;
    height: 30%;
    margin-top: 80px;
    margin-bottom: 20px;
    @media screen and (max-width:720px){
        margin-top: 0px;
        margin-bottom: 0px;
    }
`

const GreylogoImg = styled.img`
    width: 100%;
    height: 100%;
`

const SocialMediaDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 15%;
    height: 50px;
    @media screen and (max-width:960px){
        width: 200px;
    }
    @media screen and (max-width:720px){
        width: 160px;
    }
`

const SocialMediaSpan = styled.span`
    display: block;
    width: 30px;
    height: 30px;
    position: relative;
    @media screen and (max-width:960px){
        width: 25px;
    }
    @media screen and (max-width:720px){
        width: 20px;
    }
`

const Icon = styled.img`
    display: block;
    width: 100%;
    height: 80%;
    position: absolute;
    &.secondary{
        display: block;
        z-index: 1;
        &:hover{
            display: none;
        }
    }
`

const ContactDiv = styled.div`
    width: 21%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: 50px;

    @media screen and (max-width:1200px){
        width:350px
    }
    @media screen and (max-width:960px){
        width:250px;
        margin-bottom: 20px;
    }
`
const ContactLink = styled.a`
    text-decoration: none;
    color: #bbb;
    font-size: 18px;
    @media screen and (max-width:960px){
        font-size:15px;
    }
`

const LastDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
    align-items: center;
    margin-bottom: 30px;
    @media screen and (max-width:1200px){
        width: 500px;
    }
`

const Copyright = styled.p`
    color: #bbb;
`

const Links = styled(Link)`
    text-decoration: none;
    color: #bbb;
`

const Left = styled.div`

`

const Right = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1200px){
        width : 250px
    }
`