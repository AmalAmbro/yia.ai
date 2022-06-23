import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Actors from './Actors'
import Technology from './Technology'
import Certificate from './Certificate'
import TefunSchool from './TefunSchool'
import Scroll from './Scroll'
import TalropOtt from './TalropOtt'
import Faq from './Faq'
import Footer from './Footer'
import Introduction from './Introduction'
import Login from './Login'


export default function Yia() {

  return (
    <>
      <Login />
      <Introduction/>
      <Actors />
      <Technology />
      <Certificate />
      <TefunSchool />
      <JoinForFree to="/">Join for free</JoinForFree>
      <Scroll />
      <TalropOtt />
      <Faq />
      <Footer />
    </>
  )
}

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
const JoinForFree = styled(Button)`
  width: 8%;
  height: 25px;
  display:flex;
  align-items: center;
  font-size: 20px;
  margin: 0 auto;
  @media screen and (max-width:1200px){
    font-size: 17px;
  }
  @media screen and (max-width:960px){
    width: 80px;
    font-size: 13px;
  }
`
