import React from 'react';
import styled from 'styled-components';

const Header = ({toggleTheme}) => {
  return (
    <Wrapper>
      <span>Logo</span>
      <StyledButton onClick={toggleTheme} bg="purple" >Mode</StyledButton>
      {/* <Button onClick={toggleTheme}>New Mode</Button> */}
    </Wrapper>
  )
}

export default Header;

const Button = (props)=>{
  const {children} = props
  return (<button {...props}>{children}</button>)
}

const Wrapper = styled.header`
    padding:20px;
    background-color: ${({theme})=> theme.background.primary};
    color: ${props=> props.theme.color.primary};
    font-weight: 600;
    display:flex;
    justify-content:space-between;
    
`

const StyledButton = styled.button`
  background-color: ${props => props.bg || 'blue'};
  color:${(props)=> props.color || 'white'};
`