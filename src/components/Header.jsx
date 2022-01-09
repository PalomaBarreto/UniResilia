import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header()
{
  return (

    <StyledHeader>
      
      <Link to="/"> <ImgLogo src={logo} alt="logomarca" className="image"/> </Link>
      <Nav>
        <StyledLink to="/sobre-nos">Sobre Nós</StyledLink>
        <StyledLink to="/contato">Contato</StyledLink>
        <StyledLink to="/nossas-unidades">Nossas Unidades</StyledLink>
        <StyledLink to="/area-prof" >Área do Professor</StyledLink>
      </Nav>
      
    </StyledHeader>
    
    
  )
}

const StyledHeader = styled.header`
background-color: var(--orange);
color: var(--navy);
box-shadow: 5px 7px 10px var(--black);
width: 100%;
height: 100px;
display: flex;
flex-direction: row;
align-items: center;
justify-content:space-between;
`

const Nav = styled.div`
width: 60%;
display: flex;
align-items: center;
justify-content:space-between;
padding: 20px;
cursor: pointer;
`
const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  transition: all .3s;
  &:hover {
    color: var(--yellow);
    transform: scale(1.2);
  }
`

const ImgLogo = styled.img`
width: 270px;
height: 100px;
`;
  
export default Header