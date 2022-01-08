import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Header()
{
  return (

    <StyledHeader>
      
      <Link to="/"> <ImgLogo src={logo} alt="logomarca" className="image"/> </Link>
      <Nav>
        <Link to="/sobre-nos">Sobre Nós</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/nossas-unidades">Nossas Unidades</Link>
        <Link to="/login" >Login</Link>
      </Nav>
      
    </StyledHeader>
    
    
  )
}

const StyledHeader = styled.header`
background-color: var(--orange);
color: var(--navy);
width: 100%;
height: 115px;
display: flex;
flex-direction: row;
align-items: center;
justify-content:space-between ;
margin-bottom: 20px;
`

const Nav = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content:space-between;
padding: 20px
`

const ImgLogo = styled.img`
width: 270px;
height: 100px;
`;

  
export default Header