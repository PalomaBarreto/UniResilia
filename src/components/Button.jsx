import React from 'react'
import styled from 'styled-components'


function Button(props)
{
  return(
    <Btn onClick={props.click}>
    {props.children}
    </Btn>
  )
}
  
  
const Btn = styled.button`
  background-color: var(--orange);
  color: var(--navy);
  font-size: 18px;
  height: 40px;
  padding: 8px 10px;
  border-radius: 5px;
  border: none;
  transition: all .3s;
  &:hover {
    color: var(--yellow);
    
}
`
  
export default Button