import React, { useState } from 'react'
import styled from 'styled-components'
import close from '../../assets/close.svg'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'


export default function Login() {
    const [open, setOpen] = useState(false)


  return (
    <>
        <DarkFadebackground className={open ? "show" : "hide"}>
            <LoginBox className={open ? "show" : "hide"}>
                <Closespan onClick={()=>setOpen(!open)} className={open ? "show" : "hide"}>
                    <CloseImage src={close}/>
                </Closespan>
                <LoginBackground className={open ? "show" : "hide"}>
                    <FormWrapper>
                        <Form>
                            <LoginHeading>Login to your account</LoginHeading>
                            <LoginLabel>Enter your registered phone number</LoginLabel>
                            <InputBox>
                                <CountrySelect>
                                    <Country>India</Country>
                                    <Country>England</Country>
                                    <Country>China</Country>
                                    <Country>Pakistan</Country>
                                    <Country>Israel</Country>
                                </CountrySelect>
                                <LoginInput type={"text"} placeholder="Enter your phone number"></LoginInput>
                            </InputBox>
                            <Button to="/" className="login">Next</Button>
                        </Form>
                    </FormWrapper>
                </LoginBackground>
                
            </LoginBox>
        </DarkFadebackground>
        <Transparent>
        <Header>
          <Logo><Yay src={logo} alt='/'/></Logo>
          <Button to="/" onClick={()=>setOpen(!open)} >Join Now</Button>
        </Header>
      </Transparent>
    </>
  )
}

const DarkFadebackground = styled.section`
    height: 100%;
    width: 0;
    /* transition: all 0.1s ease 100ms; */
    &.show{
        background-color:rgba(0, 0, 0, 0.6);
        position: fixed;
        top: 0;
        right: 0;
        z-index: 100;
        height: 100%;
        width: 100%;
    }
`
const LoginBox = styled.div`
    width: 0;
    height: 100%;
    position: absolute;        
    background-color: #fff;
    opacity: 0;
    transition: all 0.5s ease 100ms;
    right: -655px;
    top: 0;
    z-index: 102;
    &.show{
        right: 0px;
        width: 40%;
        opacity: 1;
    }
`
const Closespan = styled.span`
    position: absolute;
    display: none;    
    left: -30px;
    &:hover{
        cursor: pointer;
    }
    &.show{
        display: block;
        width: 25px;
        height: 25px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const CloseImage = styled.img`
    width: 50%;
    height:50%;
`
const LoginBackground = styled.div`
    display: none;
    width: 100%;
    /* background: url('../../assets/decorator.svg'); */
    background: url('https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/auth/decorator.svg') no-repeat;
    background-position: 0% 0%;
    background-size: 606px;
    height: 100%;
    &.show{
        display: block;
    }

`

const FormWrapper = styled.section`
    width: 80%;
    margin: 0 auto;
` 
const Form = styled.form`
    width: 100%;
    padding-top: 250px;
`

const LoginHeading = styled.h1`
    font-size: 28px;
    margin-bottom: 20px;
`

const LoginLabel = styled.label`
    font-size: 20px;
    @media screen and (max-width:960px){
        font-size: 17px;
    }
`

const LoginInput = styled.input`
    display: inline-block;
    height: 46px;
    width: 75%;
    padding: 10px 20px;
    border: 2px solid grey;
    border-radius: 7px;
    
`
const InputBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    width: 100%;
    height: auto;
`

const CountrySelect = styled.select`
    display: block;
    width: 70px;
    height: 70px;
    font-size: 15px;
    background-color: #000;
    color: #fff;
    font-weight: 600;
    border-radius: 7px;
    padding-left: 10px;
`
const Country = styled.option``

const Button = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
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
  &.login{
    margin-top: 20px;
  }
  @media screen and (max-width:720px){
      padding: 12px 20px;
  }
`

const Transparent = styled.header`
  box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding-top: 4px;
  width: 85%;
  margin: 0 auto ;
  
`



const Logo = styled.h1`
  display: block;
  width: 130px;
  @media screen and (max-width:960px){
    width: 90px;
  }
`

const Yay = styled.img`
  width: 100%;
`