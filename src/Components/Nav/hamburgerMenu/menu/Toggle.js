import React from 'react'
import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';

const Toggle = ({handleNavToggle}) => {
    return (
        <StyledToggle className="animate__animated animate__fadeInRight" onClick={handleNavToggle}>
            <FaBars/>
        </StyledToggle>
    )
}

const StyledToggle = styled.button`
  position: fixed;
  top: 3%;
  right: 10%;
  color: #999;
  border-radius: 2rem;
  padding: .60rem;
  display: flex;
  place-items: center;
  font-size: 1rem;
  cursor: pointer;
  border: #777;
`;

export default Toggle
