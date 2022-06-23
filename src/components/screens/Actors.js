import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import jayasurya from '../../assets/Jayasurya_01.jpg';
import Pepe from '../../assets/Antony_vertical_thumb_.jpg';
import MRavi from '../../assets/Major_Ravi_02.jpg';
import Niranjana from '../../assets/Niranjana_01.jpg';
import Bibin from '../../assets/Bibin-01-min.jpg';
import Sandra from '../../assets/Sandra-01-min.jpg';
import Vishnu from '../../assets/Vishnu-unnikrishnan-01-min.jpg';
import MAniyanpilla from '../../assets/Maniyanpilla-Raju-01-min.jpg';
import Gowri from '../../assets/Gowri-Nandha-01-min.jpg';
import Hareesh from '../../assets/Hareesh-01-min.jpg';
import play from '../../assets/play.svg';


export default function Actors() {

    // const [watchStory,setWatch] = useState(Array(10).fill(false))
    // let handlWatch = (index) => {
    //     watchStory[index] = !watchStory[index];
    //     setWatch(watchStory)
    //     console.log(watchStory)
    // }

  return (
    <Wrapper>
        <Actorswrpped>
            <Green>TEFUN-ന്</Green>
            <Secondheading>ആശംസകളോടെ</Secondheading>
            <Actorsul>
                <Actorsli>
                    <Actorsgradient />
                    <Actordiv>
                        <Actorsimage src={jayasurya} alt=""/>
                    </Actordiv>
                    <Actordetails>
                        <Actornmame>Jayasurya</Actornmame>
                        <Actordesignation>Actor</Actordesignation>
                        <Watchstory to="/" >
                            <Watchstorytext >
                                <Play><Playimage src={play} alt="" /></Play>WATCH STORY
                            </Watchstorytext>
                        </Watchstory>
                    </Actordetails>
                </Actorsli>
                
                <Actorsli>
                    <Actorsgradient />
                    <Actordiv>
                        <Actorsimage src={Pepe} alt=""/>
                    </Actordiv>
                    <Actordetails>
                        <Actornmame>Antony Varghese</Actornmame>
                        <Actordesignation>Actor</Actordesignation>
                        <Watchstory to="/" >
                            <Watchstorytext >
                                <Play><Playimage src={play} alt="" /></Play>WATCH STORY
                            </Watchstorytext>
                        </Watchstory>
                    </Actordetails>
                </Actorsli>

                <Actorsli>
                    <Actorsgradient />
                    <Actordiv>
                        <Actorsimage src={MRavi} alt=""/>
                    </Actordiv>
                    <Actordetails>
                        <Actornmame>Major Ravi</Actornmame>
                        <Actordesignation>Director & Actor</Actordesignation>
                        <Watchstory to="/" >
                            <Watchstorytext >
                                <Play><Playimage src={play} alt="" /></Play>WATCH STORY
                            </Watchstorytext>
                        </Watchstory>
                    </Actordetails>
                </Actorsli>

                <Actorsli>
                    <Actorsgradient />
                    <Actordiv>
                        <Actorsimage src={Niranjana} alt=""/>
                    </Actordiv>
                    <Actordetails>
                        <Actornmame>Niranjana Anoop</Actornmame>
                        <Actordesignation>Actress</Actordesignation>
                        <Watchstory to="/" >
                            <Watchstorytext >
                                <Play><Playimage src={play} alt="" /></Play>WATCH STORY
                            </Watchstorytext>
                        </Watchstory>
                    </Actordetails>
                </Actorsli>

                <Actorsli>
                    <Actorsgradient />
                    <Actordiv>
                        <Actorsimage src={Bibin} alt=""/>
                    </Actordiv>
                    <Actordetails>
                        <Actornmame>Bibin George</Actornmame>
                        <Actordesignation>Script writer & Actor</Actordesignation>
                        <Watchstory to="/" >
                            <Watchstorytext >
                                <Play><Playimage src={play} alt="" /></Play>WATCH STORY
                            </Watchstorytext>
                        </Watchstory>
                    </Actordetails>
                </Actorsli>

                <Actorsli>
                    <Actorsgradient />
                    <Actordiv>
                        <Actorsimage src={Sandra} alt=""/>
                    </Actordiv>
                    <Actordetails>
                        <Actornmame>Sandra Thomas</Actornmame>
                        <Actordesignation>Producer & Actress</Actordesignation>
                        <Watchstory to="/" >
                            <Watchstorytext >
                                <Play><Playimage src={play} alt="" /></Play>WATCH STORY
                            </Watchstorytext>
                        </Watchstory>
                    </Actordetails>
                </Actorsli>

                <Actorsli>
                    <Actorsgradient />
                    <Actordiv>
                        <Actorsimage src={Vishnu} alt=""/>
                    </Actordiv>
                    <Actordetails>
                        <Actornmame>Vishnu Unnikrishnan</Actornmame>
                        <Actordesignation>Actor & Screen writer</Actordesignation>
                        <Watchstory to="/" >
                            <Watchstorytext >
                                <Play><Playimage src={play} alt="" /></Play>WATCH STORY
                            </Watchstorytext>
                        </Watchstory>
                    </Actordetails>
                </Actorsli>

                <Actorsli>
                    <Actorsgradient />
                    <Actordiv>
                        <Actorsimage src={MAniyanpilla} alt=""/>
                    </Actordiv>
                    <Actordetails>
                        <Actornmame>Maniyanpilla Raju</Actornmame>
                        <Actordesignation>Actor</Actordesignation>
                        <Watchstory to="/" >
                            <Watchstorytext >
                                <Play><Playimage src={play} alt="" /></Play>WATCH STORY
                            </Watchstorytext>
                        </Watchstory>
                    </Actordetails>
                </Actorsli>

                <Actorsli>
                    <Actorsgradient />
                    <Actordiv>
                        <Actorsimage src={Gowri} alt=""/>
                    </Actordiv>
                    <Actordetails>
                        <Actornmame>Gowri Nandha</Actornmame>
                        <Actordesignation>Actress</Actordesignation>
                        <Watchstory to="/" >
                            <Watchstorytext >
                                <Play><Playimage src={play} alt="" /></Play>WATCH STORY
                            </Watchstorytext>
                        </Watchstory>
                    </Actordetails>
                </Actorsli>

                <Actorsli>
                    <Actorsgradient />
                    <Actordiv>
                        <Actorsimage src={Hareesh} alt=""/>
                    </Actordiv>
                    <Actordetails>
                        <Actornmame>Hareesh Kanaran</Actornmame>
                        <Actordesignation>Actor</Actordesignation>
                        <Watchstory to="/" >
                            <Watchstorytext >
                                <Play><Playimage src={play} alt="" /></Play>WATCH STORY
                            </Watchstorytext>
                        </Watchstory>
                    </Actordetails>
                </Actorsli>
            </Actorsul>
        </Actorswrpped>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    width: 70%;
    margin:0 auto;
`

const Green = styled.h1`
    color: rgb(15, 167, 111);
    font-size: 30px;
    margin: 0 0 30px 0;
`

const Secondheading = styled.h2`
    margin: 0 0 30px 0;
`

const Actorsul = styled.ul`
    padding:0px;
    list-style: none;
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 70px;
`
const Actorsli = styled.li`
    position: relative;
    width: 23%;
    height: 400px;
    display: block;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 30px;
    &:hover{
        cursor: pointer;
    }
    &:nth-child(9){
        margin-left: 25.5%;
    }
    &:nth-child(10){
        margin-right: 25.5%;
    }

    @media screen and (max-width:1200px){
        height: 330px;
    }
    @media screen and (max-width:960px){
        height: 300px;
        width: 32%;
        &:nth-child(9){
            margin-left: 0;
        }
        &:nth-child(10){
            margin: 0 auto;
        }
    }
`

const Actordiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

const Actorsgradient = styled.div`
    position: absolute;
    background: linear-gradient(rgba(248, 248, 248, 0) 0%, rgb(0, 0, 0) 100%);
    opacity: 0.7;
    height: 100%;
    width: 100%;
    z-index: 1;
`

const Actorsimage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
`   



const Actornmame = styled.h1`
    color: #fff;
    width: 100%;
    margin: 0;
    text-align: center;

    @media screen and (max-width: 1200px){
        font-size: 17px;
    }
`
const Actordesignation = styled.p`
    color: #fff;
    width: 100%;
    text-align: center;
    font-size: 18px;
    margin: 0px auto 20px auto;
    @media screen and (max-width: 1200px){
        font-size: 15px;
    }
`

const Watchstory = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0;
    margin-bottom: 30px;
    margin-top: 10px;
    width: 80%;
    border-radius: 8px;
    transition: all 0.2s ease ;
`

const Watchstorytext = styled.p`
    display: flex;
    opacity: 0;
    margin:0;
    font-weight: 700;
    transition: all 0.2s ease ;
    @media screen and (max-width:1200px){
        font-size: 15px;
    }
`

const Play = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
`

const Playimage = styled.img`
    width: 100%;
    height: 100%;
`

const Actorswrpped = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Actordetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    &:hover{
       ${Watchstory}{
           height: 45px;
       }
       ${Watchstorytext}{
           opacity: 1;
       }
    }
    
`
