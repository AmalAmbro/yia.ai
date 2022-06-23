import React, { useState } from 'react'
import styled from 'styled-components'
import down from '../../assets/down-arrow.svg'

export default function Faq() {
    const [show,setShow] = useState(false);
    const [show1,setShow1] = useState(false);
    const [show2,setShow2] = useState(false);
    const [show3,setShow3] = useState(false);
    const [show4,setShow4] = useState(false);


  return (
    <FaqSection>
        <FaqGHead>Frequently</FaqGHead>
        <FaqHead>Asked Questions</FaqHead>
        <FaqUl>
            <FaqLi onClick={()=>setShow(!show)} >
                <FaqQ>
                    <FaqP>Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?</FaqP>
                    <FaqShow className={ show   && "rotate"}>
                        <FaqShowImg src={down} alt=""/>
                    </FaqShow>
                </FaqQ>
                
                <FaqA className={show ? "show" : "hidden"}>
                    <FaqP className={`answer ${show ? "show" : "hidden"}`}>LP, UP, HS, HSE, VHSE സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.</FaqP>
                </FaqA>
            </FaqLi>

            <FaqLi onClick={()=>setShow1(!show1)}>
                <FaqQ>
                    <FaqP>എങ്ങനെയാണ് സ്കൂളുകൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുക?</FaqP>
                    <FaqShow className={ show1 && "rotate"}>
                        <FaqShowImg src={down} alt=""/>
                    </FaqShow>
                </FaqQ>
                
                <FaqA className={show1 ? "show" : "hidden"}>
                    <FaqP className={`answer ${show1 ? "show" : "hidden"}`}>ഈ പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് Talrop നൽകിയിരിക്കുന്ന ഫോൺ നമ്പരിൽ കോൺടാക്ട് ചെയ്ത് പ്രോഗ്രാം സ്കൂളിൽ നടപ്പിലാക്കാവുന്നതാണ്.</FaqP>
                </FaqA>
            </FaqLi>

            <FaqLi onClick={()=>setShow2(!show2)}>
                <FaqQ>
                    <FaqP>എന്താണ് Tefun ലൂടെ വിദ്യാർത്ഥികൾക്ക് ലഭിക്കുന്ന നേട്ടം?</FaqP>
                    <FaqShow className={ show2 && "rotate"}>
                        <FaqShowImg src={down} alt=""/>
                    </FaqShow>
                </FaqQ>
                
                <FaqA className={show2 ? "show" : "hidden"}>
                    <FaqP className={`answer ${show2 ? "show" : "hidden"}`}>ലളിതവും രസകരവുമായ ടെക്ക്നോളജി പഠനമാണ് Tefun പ്രോഗ്രാമിലൂടെ വിദ്യാർത്ഥികൾക്ക് ലഭ്യമാകുന്നത്. AI, Robotics, IoT, 3D Printing, Metaverse, web 3.0 എന്നിങ്ങനെ 70-ൽപ്പരം ഭാവിയിലെ ടെക്ക്നോളജി സാധ്യതകളെക്കുറിച്ചാണ് Tefun വിദ്യാർത്ഥികളുടെ മുൻപിലേക്ക് എത്തിക്കുന്നത്. Tefun പ്രോഗ്രാം വിജയകരമായി പൂർത്തിയാക്കുന്ന വിദ്യാർത്ഥികൾക്ക് ടാൽറോപ് സർട്ടിഫിക്കറ്റ് നൽകുന്നതാണ്.</FaqP>
                </FaqA>
            </FaqLi>

            <FaqLi onClick={()=>setShow3(!show3)}>
                <FaqQ>
                    <FaqP>Tefun പ്രോഗ്രാം നിലവിലെ പഠനത്തെ ബാധിക്കുമോ?</FaqP>
                    <FaqShow className={ show3 && "rotate"}>
                        <FaqShowImg src={down} alt=""/>
                    </FaqShow>
                </FaqQ>
                
                <FaqA className={show3 ? "show" : "hidden"}>
                    <FaqP className={`answer ${show3 ? "show" : "hidden"}`}>അക്കാദമിക് പഠനത്തിന് ശേഷം ഒഴിവുസമയങ്ങളിൽ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കാവുന്നതാണ്. പത്തു മണിക്കൂറിൽ താഴെയാണ് പ്രോഗ്രാം ഡ്യൂറേഷൻ വരുന്നത്. ഒരു ദിവസം 15 മിനിറ്റ് മാറ്റിവെച്ചാൽ പ്രോഗ്രാം നിശ്ചയിച്ച കാലയളവിൽ പൂർത്തിയാക്കാവുന്നതാണ്.</FaqP>
                </FaqA>
            </FaqLi>

            <FaqLi onClick={()=>setShow4(!show4)}>
                <FaqQ>
                    <FaqP>വിദ്യാർത്ഥികൾക്ക് ഡയറക്ട് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുമോ?</FaqP>
                    <FaqShow className={ show4 && "rotate"}>
                        <FaqShowImg src={down} alt=""/>
                    </FaqShow>
                </FaqQ>
                
                <FaqA className={show4 ? "show" : "hidden"}>
                    <FaqP className={`answer ${show4 ? "show" : "hidden"}`}>Tefun പ്രോഗ്രാം സ്കൂളുകൾ മുഖേനയാണ് നടപ്പിലാക്കുന്നത്. അതുകൊണ്ട് തന്നെ വിദ്യാർത്ഥികൾക്ക് സ്കൂൾ മുഖാന്തരം മാത്രമേ പങ്കെടുക്കാൻ സാധിക്കുകയുള്ളൂ. നിങ്ങളുടെ സ്കൂൾ ഇതിൽ ഭാഗമായിട്ടില്ലെങ്കിൽ സ്കൂൾ അധികൃതരുമായി ബന്ധപ്പെട്ട ശേഷം നിങ്ങളുടെ സ്കൂൾ Tefun-ൽ രജിസ്റ്റർ ചെയ്ത് പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.</FaqP>
                </FaqA>
            </FaqLi>
        </FaqUl>
    </FaqSection>
  )
}

const FaqSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`

const FaqGHead = styled.h1`
    color:rgb(16,167,111);
    font-size: 37px;
    margin: 10px 0 0 0;
    @media screen and (max-width:720px){
        font-size: 30px;
    }
`

const FaqHead = styled(FaqGHead)`
    color:#222;
`

const FaqUl = styled.ul`
    list-style: none;
    width:50%;
    margin:60px auto;
    @media screen and (max-width:960px){
        width:70%
    }
`

const FaqLi = styled.li`
    background-color: rgb(243, 249, 235);
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;
    margin-bottom: 30px;
`


const FaqQ = styled.div`
    position: relative;
    padding: 20px 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    font-size: 16px;
    transition:all 0.5s ;
    
`

const FaqA = styled(FaqQ)`
    width: 82%;
    height: fit-content;
    margin-left:40px;
    padding: 0;
    transition:all 0.3s;
    &.hidden{
        height: 0px;
    }
    &.show{
        margin-bottom: 20px;
        min-height: 50px;
        max-height: 400px;
    }
`

const FaqP = styled.p`
    width: 90%;
    display: block;
    margin: 0;
    text-align: justify;

    &.answer{
        width: 100%;
    }
    &.hidden{
        opacity: 0;
    }
    &.show{
        opacity:1;
    }
    @media screen and (max-width:960px){
        font-size: 15px;
    }
    @media screen and (max-width:720px){
        width: 80%;
        font-size: 13px;
    }
`

const FaqShow = styled.span`
    position: absolute;
    right: 30px;
    top: 30px;
    width:3%;
    transition: all 0.2s ;
    &.rotate{
        transform: rotate(180deg);
    }
`

const FaqShowImg = styled.img`
    width:100%;
`
