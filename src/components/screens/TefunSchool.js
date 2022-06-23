import React from 'react'
import styled from 'styled-components'
import call from '../../assets/phone-g-call.svg'
import scissor from '../../assets/scissors.svg'
import certificatered from '../../assets/certificate-r.svg'
import certificateblue from '../../assets/certificate.svg'

import devices from '../../assets/devices.svg'

export default function TefunSchool() {
  return (
    <SchoolsWrapper>
      <School>
        <SchoolsHeading>
          സ്കൂളുകൾക്ക്  <Black>Tefun</Black> പ്രോഗ്രാമിന്റെ ഭാഗമാകാം
        </SchoolsHeading>
        <SchoolUl>
          <SchoolLi>
            <ContactDiv className='square green'>
              <ContactDiv className='round green'>
                <ContactImg src={call} alt=""/>
              </ContactDiv>
            </ContactDiv>
            <ContactLiP><BlackP>Tefun</BlackP> പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് <BlackP>Talrop</BlackP>-ന്റെ ടീമുമായി <AGreen href='tel:8589998744'>858 999 8744</AGreen> എന്ന നമ്പറിൽ കോൺടാക്ട് ചെയ്യാവുന്നതാണ്.</ContactLiP>
          </SchoolLi>
          <SchoolLi>
            <ContactDiv className='square yellow'>
              <ContactDiv className='round yellow'>
                <ContactImg src={scissor} alt=""/>
              </ContactDiv>
            </ContactDiv>
            <ContactLiP>സ്കൂളിന്റെ ലോഗോയും ആവശ്യ വിവരങ്ങളും നൽകുക.</ContactLiP>
          </SchoolLi>
          <SchoolLi>
            <ContactDiv className='square orange'>
              <ContactDiv className='round orange'>
                <ContactImg src={certificatered} alt=""/>
              </ContactDiv>
            </ContactDiv>
            <ContactLiP>സ്കൂൾ നിശ്ചയിക്കുന്ന ഉദ്ഘാടന ദിനത്തിൽ ആവശ്യമായ <BlackP>Inauguration Video</BlackP> ഡിജിറ്റലായി <BlackP>Talrop</BlackP> നൽകുന്നതാണ്.</ContactLiP>
          </SchoolLi>
          <SchoolLi>
            <ContactDiv className='square violet'>
              <ContactDiv className='round violet'>
                <ContactImg src={devices} alt=""/>
              </ContactDiv>
            </ContactDiv>
            <ContactLiP><BlackP>Mobile, Tab, Laptop, Desktop Computer </BlackP>എന്നിവയിൽ ഏതെങ്കിലും ഡിവൈസുകൾ ഉപയോഗിച്ച് <BlackP>Talrop</BlackP> ലഭ്യമാക്കുന്ന <BlackP> Web, Android, iOS</BlackP> പ്ലാറ്റ്ഫോമുകളിലൂടെ കുട്ടികൾക്ക് പഠിക്കുവാൻ സാധിക്കും.</ContactLiP>

          </SchoolLi>
          <SchoolLi>
            <ContactDiv className='square blue'>
              <ContactDiv className='round blue'>
                <ContactImg src={certificateblue} alt=""/>
              </ContactDiv>
            </ContactDiv>
            <ContactLiP>വിജയകരമായി പൂർത്തീകരിക്കുന്ന വിദ്യാർത്ഥികൾക്ക് ടാൽറോപ് സർട്ടിഫിക്കറ്റ് നൽകുന്നു.</ContactLiP>
          </SchoolLi>
        </SchoolUl>
      </School>
    </SchoolsWrapper>
  )
}

const School = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AGreen = styled.a`
  color:rgb(16,167,111);
  font-weight: 700;
  font-size: 20px;
  margin: 0;
  text-decoration: none;
  @media screen and (max-width:960px){
    font-size: 15px;
  }
`
const SchoolsWrapper = styled.section`
  margin-bottom: 200px;
  @media screen and (max-width:720px){
    margin-bottom: 20px;
  }
`

const SchoolsHeading = styled.h1`
  color: rgb(16,167,111);
  font-size: 25px;
  margin: 0;
  width: 40%;
  text-align: center;
  @media screen and (max-width:960px){
    font-size: 20px;
  }
`


const Black = styled.p`
  color: #000;
  display: inline-block;
  font-size: 25px;
`

const BlackP = styled.p`
  color: #222;
  display:inline-block;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  @media screen and (max-width:1200px){
    font-size: 16px;
  }
  @media screen and (max-width:960px){
    font-weight: 900;
  }
  @media screen and (max-width:960px){
    font-size: 13px;
  }
`

const SchoolUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 550px;
  width: 80%;
  margin-top: 120px;
  @media screen and (max-width:960px){
    height: fit-content;
  }
  @media screen and (max-width:720px){
    height: fit-content;
  }
`

const SchoolLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 33%;
  height: 70%;
  &:nth-child(4){
    margin-left: auto;
  }
  &:nth-child(5){
    margin-right: auto;
  }
  @media screen and (max-width:960px){
    width: 50%;
    margin-bottom: 20px;
  }
`

const ContactLiP = styled.h1`
  margin: 40px auto 0 auto;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  width: 95%;
  display: inline-block;
  @media screen and (max-width:1200px){
    font-size: 15px;
  }
  @media screen and (max-width:960px){
    font-size: 15px;
  }
  @media screen and (max-width:720px){
    font-size: 15px;
  }
`

const ContactDiv = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  &.green{
    background-color: rgb(0, 154, 102);
    border: 2px solid rgb(0, 154, 102);
  }
  &.yellow{
    background-color:rgb(251, 184, 44);
    border: 2px solid rgb(251, 184, 44);
  }
  &.orange{
    background-color:rgb(255, 91, 47);
    border: 2px solid rgb(255, 91, 47);
  }
  &.violet{
    background-color: rgb(178, 87, 255);
    border: 2px solid rgb(178, 87, 255);
  }
  &.blue{
    background-color: rgb(76, 154, 254);
    border: 2px solid rgb(76, 154, 254);
  }
  &.square{
    border-radius: 30px;
    transform: rotate(45deg);
  }
  &.round{
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 70px;
    height: 70px;
    bottom: 40px;
    right: -30px;
    transform: rotate(-45deg);
  }
  @media screen and (max-width:960px){
    width: 120px;
    height: 120px;
    &.round{
      width: 60px;
      height: 60px;
      bottom: 30px;
      right: -30px;
    }
  }
`

const ContactImg = styled.img`
  width: 45%;
  display: block;
`
