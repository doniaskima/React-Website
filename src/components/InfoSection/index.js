import React from 'react'
import { Button } from 'react-scroll';
import {InfoContainer, InfoWrapper ,InfoRow ,Column1 ,Column2,TextWrapper,Topline,Heading,Subtitle,BtnWrap,ImgWrap,Img} from './InfoElements'

const InfoSection = () => {
  return (
    <>
          <InfoContainer>
              <InfoWrapper>
                  <InfoRow>
                      <Column1>
                          <TextWrapper>
                              <Topline>Topline</Topline>
                              <Heading>Heading</Heading>
                              <Subtitle>Subtitle</Subtitle> 
                              <BtnWrap>
                                 <Button to="home"/>
                              </BtnWrap>
                          </TextWrapper>
                      </Column1>
                      <Column2>
                          <ImgWrap>
                    
                          </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
       </InfoContainer>   
    </>
  )
}

export default InfoSection