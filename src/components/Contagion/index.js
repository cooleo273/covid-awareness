import React from 'react'
import { Container1,Rectangle1,Rectangle2,Rectangle3,Textc } from './styles'
import hero from "../../assets/svg/Mask girl.svg"

function Contagion() {
    return (
        <Container1>
            <h5>
            Covid-19
            </h5>
            <p>
            Contagion
            </p>
            <p>
            Corona Viruses Are A Type Of Virus. 
            There Are Many Different Kinds, And Some 
            Cause Disease. A Newly Identified Type 
            </p>
            <Textc>
            <Rectangle1>
            <img src={hero} alt="blank" />
            <h3>Air Transmission</h3>
            </Rectangle1>
            <Rectangle2>
            <h3>Human Contacts</h3>
            </Rectangle2>
            <Rectangle3>
            <h3>Containeted Objects</h3>
            </Rectangle3>
            </Textc>

        </Container1>
    )
}

export default Contagion
