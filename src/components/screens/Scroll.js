import React from 'react'
import styled from 'styled-components'
import join from '../../assets/join-img.png'

export default function Scroll() {
  return (
    <ScrollWrapper className='wrapper'>
        <ScrollSection>
            <ScrollHeading>Tefun<ScrollHeadP>for students </ScrollHeadP></ScrollHeading>
            <ScrollHeadP className='left'>Can be part of the program</ScrollHeadP>
            <ScrollDiv>
                <ScrollLeft>
                    <ScrollUl className='scrolling'>
                        <ScrollLi className='pink'>
                            <ScrollRound className='not-last'>
                                <ScrollSpan>01</ScrollSpan>
                            </ScrollRound>
                            <ScrollP>Students can join Tefun after the Tefun program is inaugurated at the school .</ScrollP>
                        </ScrollLi>

                        <ScrollLi className='lightGreen'>
                            <ScrollRound className='not-last'>
                                <ScrollSpan>02</ScrollSpan>
                            </ScrollRound>
                            <ScrollP>You can be part of the Tefun program online through Talrop 's Web, Android and iOS platforms (yia.ai) .</ScrollP>
                        </ScrollLi>

                        <ScrollLi className='lightGreen'>
                            <ScrollRound className='not-last'>
                                <ScrollSpan>03</ScrollSpan>
                            </ScrollRound>
                            <ScrollP>After entering the students' mobile number, select the profile and start the Tefun program.</ScrollP>
                        </ScrollLi>

                        <ScrollLi className='lightGreen'>
                            <ScrollRound className='not-last'>
                                <ScrollSpan>04</ScrollSpan>
                            </ScrollRound>
                            <ScrollP>If the profile is not available, students can participate in the Tefun program by entering their school code, class, and division.</ScrollP>
                        </ScrollLi>

                        <ScrollLi className='pink'>
                            <ScrollRound className='not-last'>
                                <ScrollSpan>05</ScrollSpan>
                            </ScrollRound>
                            <ScrollP>Students can learn at any time through Virtual Schooling .</ScrollP>
                        </ScrollLi>

                        <ScrollLi className='lightGreen'>
                            <ScrollRound className='not-last'>
                                <ScrollSpan>06</ScrollSpan>
                            </ScrollRound>
                            <ScrollP>The final phase of the Tefun program will have an online exam on school-determined days.</ScrollP>
                        </ScrollLi>

                        <ScrollLi className='lightGreen'>
                            <ScrollRound>
                                <ScrollSpan>07</ScrollSpan>
                            </ScrollRound>
                            <ScrollP>Students who successfully complete the Tefun program are awarded a Tallop Certificate by the school.</ScrollP>
                        </ScrollLi>
                    </ScrollUl>
                </ScrollLeft>
                <ScrollRight>
                    <ScrollRightImg src={join} alt=""/>
                </ScrollRight>
            </ScrollDiv>
        </ScrollSection>
    </ScrollWrapper>
  )
}

const ScrollWrapper = styled.section`
    margin-top: 50px;
    /* @media screen and (max-width:960px){
        margin-bottom: 500px;
    } */
`

const ScrollSection = styled.section`
    width: 100%;
    margin-bottom: 70px;
`


const ScrollHeading = styled.h1`
    display:inline-block;
    margin: 0 0 0 0;
    font-size: 30px;
    width: 100%;
    text-align: initial;
    margin-left: 50px;
    @media screen and (max-width:960px){
        font-size: 25px;
    }
`

const ScrollHeadP = styled.b`
    display: inline-block;
    color: rgb(15,170,111);
    font-size: 28px;
    margin-left: 5px;
    &.left{
        margin-left: 50px;
    }
    @media screen and (max-width:960px){
        font-size: 25px;
    }
`

const ScrollDiv = styled.div`
    display: flex;
    width:100%;
    justify-content: space-between;
    margin: 50px auto 0 auto;
`

const ScrollLeft = styled.div`
    width: 55%;
`

const ScrollUl = styled.ul`
    list-style: none;
    max-height: 535px;
    display: flex;
    flex-direction: column;
    padding: 0;
    align-items: center;
    &.scrolling{
        overflow-y: scroll;
    }
    &::-webkit-scrollbar {
        display: none;
    }
    @media screen and (max-width:960px){
        height: 300px;
    }
`

const ScrollLi = styled.li`
    position: relative;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    width: 80%;
    min-height: 120px;
    max-height: 150px;
    padding: 20px 50px;
    box-sizing: border-box;
    border-radius: 20px;
    &.pink{
        background-color: rgb(254, 247, 236);
    }
    &.lightGreen{
        background-color: rgb(234, 243, 252);
    }
    &:last-child{
        margin-bottom: 0;
    }
    @media screen and (max-width:960px){
        min-height: 123px;
    }

    @media screen and (max-width:720px){
        min-height: fit-content;
    }
`

const ScrollRound = styled.div`
    border: 3px solid rgb(15,170,111);
    height: 60px;
    width: 60px;
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: -38px;
    background-color: #fff;
    &.not-last::after{
        content: "";
        width: 80px;
        transform: rotate(90deg);
        position: absolute;
        border-top: 2px dashed rgb(15, 167, 111);
        top: 100px;
        left: -20%;
    }
    @media screen and (max-width:720px){
        left: -33px;
        height: 50px;
        width: 50px;
        &.not-last::after{
            width: 120px;
            position: absolute;
            top: 110px;
            left: -70%;
        }
    }
`

const ScrollSpan = styled.span`
`

const ScrollP = styled.p`
    height: 100%;
    font-size: 20px;
    margin: 0;
    @media screen and (max-width:960px){
        font-size: 16px;
    }
    @media screen and (max-width:720px){
        font-size: 14px;
    }
`

const ScrollRight = styled.div`
    width: 35%;
    height: 45%;
    margin-right: 50px;
`

const ScrollRightImg = styled.img`
    display: block;
    height: 100%;
    width: 100%;
`

