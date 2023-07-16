import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const SubMenu = ({handleNavToggle}) => {

    return (
        <>
            <StyledMenu>
                <StyledLink className="animate__animated animate__fadeInRight" onClick={handleNavToggle}
                            to="/">Blog</StyledLink>
                <StyledLink className="animate__animated animate__fadeInRight" onClick={handleNavToggle}
                            to="/expert">Expert</StyledLink>
                <StyledLink className="animate__animated animate__fadeInRight" onClick={handleNavToggle}
                            to="/contact">Contact</StyledLink>
                <StyledLink className="animate__animated animate__fadeInRight" onClick={handleNavToggle}
                            to="/portfolio">Portfolio</StyledLink>
                <StyledLink className="animate__animated animate__fadeInRight" onClick={handleNavToggle}
                            to="/topiclist">Topic List</StyledLink>
                <CloseToggle className="animate__animated animate__fadeInRight"
                             onClick={handleNavToggle}>
                    <FaTimes/>
                </CloseToggle>
            </StyledMenu>
        </>
    )
}
const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  ::-webkit-scrollbar{width:6px;border-left:1px solid #E6ECF8;}
  ::-webkit-scrollbar-thumb{background-color:#d6872c;}

  @media screen and (min-width: 1050px) {
    width: 60%;
  }
  background-color: rgba(12, 1, 1, 0.9);
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`

  color: #eee;
  text-decoration: none;
  font-size: clamp(3rem, 4vw, 6vw);
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  transition: .2s all ease-in-out;

  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  &:hover {
    transition: 0.15s all ease-in-out;
    color: black;
  }
`;

const CloseToggle = styled.button`
  position: fixed;
  top: 5%;
  right: 10%;
  color: #999;
  border-radius: 2rem;
  background: #eee;
  border: #fff;
  padding: .60rem;
  display: flex;
  place-items: center;
  font-size: 1rem;
  cursor: pointer;
  
`;

export default SubMenu
