import React from 'react'
import { Container1,Rectangle1,Rectangle2,Rectangle3,Textc } from './styles'
import hero from "../../assets/svg/Group 18545.svg"
import hero1 from "../../assets/svg/Group 18541.svg"
import hero2 from "../../assets/svg/Group 18543.svg"

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
            </Rectangle1>
            <Rectangle2>
            <img src={hero2} alt="blank" />
            </Rectangle2>
            <Rectangle3>
            <img src={hero1} alt="blank" />
            </Rectangle3>
            </Textc>

        </Container1>
    )
}

export default Contagion
