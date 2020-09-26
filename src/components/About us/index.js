import React from 'react'
import hero from "../../assets/svg/Mask girl.svg"
import hero2 from "../../assets/svg/Group 18559.svg"
import { Illustration1, Container, Illustration2,TextContainer, ImageContainer,Button } from './styles'

function Aboutus() {
    return (
        <Container>
        <ImageContainer>
        <Illustration1 src={hero} alt="blank"/>
        <Illustration2 src={hero2} alt="blank"/>
        </ImageContainer>
        <TextContainer>
        <h5>
            What Is COVID-19
            <br/>
           <span> CORONA VIRUS</span>
         </h5>
        <p>
            Corona viruses are a type of virus. There are many different 
            kinds, and some cause disease. A newly identified type
            has caused a recent outbreak of respiratory illness now 
            called COVID-19.Lauren Sauer, M.S., the director of operations 
            with the Johns Hopkins Office of Critical Event Preparedness and Response.
            </p>
            <Button>Learn More</Button>

        </TextContainer>
        </Container>
    )
}

export default Aboutus
