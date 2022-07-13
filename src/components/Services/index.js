import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'; 
import Icon1 from '../../images/img.png';
import Icon2 from '../../images/money.png';
import Icon3 from '../../images/svg1.png';

const Services = () => {
  return (
      <>
          <ServicesContainer id="services">
              <ServicesH1>Our services</ServicesH1>
              <ServicesWrapper>
                  <ServicesCard>
                      <ServicesIcon src={Icon1} />
                      <ServicesH2>Reduce expenses</ServicesH2>
                      <ServicesP>We help your fess and increase your overall revenue</ServicesP>
                  </ServicesCard>
                  <ServicesCard>
                      <ServicesIcon src={Icon2} />
                      <ServicesH2>Virtual Offices</ServicesH2>
                      <ServicesP>you can access our platform online anywhere in the world</ServicesP>
                  </ServicesCard>
                  <ServicesCard>
                      <ServicesIcon src={Icon3} />
                      <ServicesH2>Premuim Benefits</ServicesH2>
                      <ServicesP>Unlock our special memebrship card that returns 5% cash back</ServicesP>
                  </ServicesCard>
              </ServicesWrapper>
        </ServicesContainer>  
   </>
  )
}

export default Services