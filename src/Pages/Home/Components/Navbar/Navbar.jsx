import React from "react";

// Pics :

import logo from "../../../../Assets/logo.png";

// MUI :

import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";

import MenuIcon from "@mui/icons-material/Menu";

//  Recat icons :

import { AiOutlineClose } from "react-icons/ai";

import { AiOutlineArrowRight } from "react-icons/ai";

import { AiOutlineTwitter } from "react-icons/ai";

import { AiOutlineInstagram } from "react-icons/ai";

import { AiFillFacebook } from "react-icons/ai";

// CSS :

import "./Navbar.scss";

const Navbar = () => {
  // Drawer Function or state

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <>
        <div className="ham_nav_main">
          <div className="navbar__container">
            <div className="nav_left">
              <div className="logo">
                <img src={logo} />
                <div className="title">
                  Rocket<span>Ship</span>
                </div>
              </div>
              <AiOutlineClose
                style={{ color: "white" }}
                className="icons"
                onClick={toggleDrawer(anchor, false)}
              />
            </div>
            <div className="nav_right">
              <div className="social_btn">
                <AiOutlineTwitter />
                <AiFillFacebook />
                <AiOutlineInstagram />
              </div>

              <div className="options">
                <div className="text">FAQs</div>
                <div className="text">Rates</div>
                <div className="text">Contact</div>
                <div className="text" style={{ color: "#ff8d72" }}>
                  Sign Up
                </div>

                <div className="log">
                  Login
                  <AiOutlineArrowRight className="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Box>
  );

  return (
    <div className="main_nav">
      <div className="nav_content">
        <div className="nav_left">
          <img src={logo} />
          <div className="title">
            Rocket<span>Ship</span>
          </div>
        </div>
        <div className="nav_right">
          <div className="social_btn">
            <AiOutlineTwitter />
            <AiFillFacebook />
            <AiOutlineInstagram />
          </div>

          <div className="options">
            <div className="text">FAQs</div>
            <div className="text">Rates</div>
            <div className="text">Contact</div>
            <div className="text" style={{ color: "#ff8d72" }}>
              Sign Up
            </div>

            <div className="log">
              Login
              <AiOutlineArrowRight className="arrow" />
            </div>
          </div>
          <div className="ham_burger">
            {["top"].map((anchor) => (
              <React.Fragment key={anchor}>
                <MenuIcon
                  style={{ color: "white" }}
                  onClick={toggleDrawer(anchor, true)}
                />
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
