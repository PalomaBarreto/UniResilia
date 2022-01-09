import React from "react";
import styled from 'styled-components';
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import logo from '../assets/logo.png'

function Footer()
{
  return(
    <Ftr>
    <ImgLogo src={logo} alt="logomarca" className="image"/>
    <Icons>
    <BsInstagram size="25" color="#2A1A5E"/>
    <BsLinkedin size="25" color="#2A1A5E"/>
    <BsGithub size="25" color="#2A1A5E"/>
    </Icons>
    <p>&copy; 2022 - Todos os direitos reservados. Página desenvolvida para fins didáticos.</p>
    
    </Ftr>
  )
}
  
export default Footer
  
const Ftr = styled.footer`
background-color: var(--orange);
color: var(--navy);
height: 175px;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
box-shadow: 0 0 1em var(--black);
  
`;
  
const Icons = styled.div`
width: 10rem;
display: flex;
justify-content: space-between;
padding: 20px 0px 10px;
  
`;
  
const ImgLogo = styled.img`
height: 420px;
width: 210px;
`;