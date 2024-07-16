import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function Footer() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return(
    <div class="bottom">Footer by Jagriti</div>
  )
}

export default Footer;
