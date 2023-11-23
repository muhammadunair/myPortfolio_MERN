import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../images/logo.png"
import {FaUserAlt} from 'react-icons/fa'

const Header = () => {
  return (
    <ReactNavbar
    logoWidth="250px"
    logo={logo}
      navColor1="black"
      navColor2="hsl(219, 48%, 8%)"
      burgerColor="white"
      burgerColorHover="hsl(250, 100%, 75%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1ColorHover="orange"
      link1Color="white"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="white"
      profileIconColorHover="orange"
    />
  );
};

export default Header;
