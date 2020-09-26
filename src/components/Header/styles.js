import styled from "styled-components"

export const HeaderContainer = styled.div`
    background: linear-gradient(to bottom, #fff8f8,#fff9f9,#fffafa,#ffffff);
   
    
`
export const NavContainer = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
`
export const Logo = styled.img`
        width:53px;
        height:53px;
        
`
export const NavBar = styled.div`
    
    width: 100%;
    height: 160px;
    && ul{
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    position: absolute;
    width:550px;
    height: 22px;
    left: 665px;
    top: 33px;
    font-family: Gelion;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    color: #035755;
    align-items:center;
    justify-items:center;
    }
    && li:first-of-type{
        
        color: #FB4C47;
    }
`
export const Button = styled.button`
    width: 124px;
    height: 42px;
    border: 2px solid #FB4C47;
    box-sizing: border-box;
    border-radius: 46px;
    background: linear-gradient(to bottom,#fff8f8,#fff9f9,#fffafa,#ffffff);

`
export const Button1 = styled.button`
    width: 168px;
    height: 47px;
    background: #FB4C47;
    box-shadow: 0px 8px 87px rgba(0,0,0,0.1);
    border-radius: 57px;
    border: 1px;
    color: white; 

`
export const Illustration = styled.img`
    position:relative;
    top:-80px;
    width: 723px;
    height: 708px;

`
export const CovidText = styled.div`
    position:relative;
    top:75px;
    width: 482px;
    font-family: Red Hat Display;
    font-style: normal;
    font-weight: bold;
    line-height: 122%;
    font-size: 39px;
    color: #035755;
    margin-left:70px;
   
    && p:first-of-type{
        font-size:32px;
        color:#FA5652;
    }
    && p:last-of-type{
    width: 484px;
    height: 86px;
    font-family: Gelion;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 190%;
    text-transform: capitalize;
    color: #4B4F51;
    }
`

export const Covid19 = styled.div`
        justify-items: center;
    width: 178.82px;
    height: 23.82px;
    font-family: Red Hat Display;
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 25px;
    text-transform: uppercase;
    color: #035755;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* justify-content: center; */
    align-items: center;
    margin: 42px;
    justify-items: center;
    width: 178.82px;
    height: 23.82px;
    font-family: Red Hat Display;
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 25px;
    text-transform: uppercase;
    color: #035755;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* justify-content: center; */
    align-items: center;
    margin: 42px;
    color: #035755;

`
export const CovidTextContainer = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;    

`
