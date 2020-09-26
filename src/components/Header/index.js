import React from 'react'
import "./styles"
import hero from "../../assets/svg/Group 3.svg";
import hero1 from "../../assets/svg/Illustration 01.svg"
import { HeaderContainer, Covid19, NavBar, Button, Illustration, Logo, CovidText,Button1, NavContainer, CovidTextContainer} from './styles'
function Header() {
    return (
        <HeaderContainer>
            <NavContainer>
            <Covid19> 
            <Logo src={hero} alt="blank"/>
                    Covid-19
            </Covid19>
            <NavBar>
                <ul>
                    <li>
                        Overview
                    </li>
                    <li>
                        Contagion    
                    </li>
                    <li>
                        Symptoms    
                    </li>
                    <li>
                        Prevention   
                    </li>
                    <li><Button>
                        Contact
                    </Button>
                    </li>
                </ul>
            </NavBar>
            </NavContainer>
            <CovidTextContainer>
            <CovidText>
                <p>
                    Covid-19 Alert
                </p>
                <p>
                    Stay At Home Quarantine To Stop Corona Virus
                </p>
                <p>
                    There is no specific medicine to prevent or 
                    treat coronavirus disease (COVID-19). People may
                    need supportive care to .
                 </p>
            <Button1>
                Let Us Help
            </Button1>
            </CovidText>
            <Illustration src={hero1} />
        </CovidTextContainer>
        </HeaderContainer>
    )
}

export default Header
