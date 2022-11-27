import React from "react";

// MUI :
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

// ICONS | ASSETS :
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import logo from "../../Assets/logo.png";

// CSS :
import "./Navbar.scss";





const Navbar = () => {
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

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <>
        <div className="ham_nav_main">
          <AiOutlineClose
            style={{ color: "black" }}
            className="icons"
            onClick={toggleDrawer(anchor, false)}
          />
          <div className="navbar__container">
            <div className="nav_right">
              <div className="nav_text">Sign In</div>
              <div className="nav_text">Create An Account</div>
              <button className="rent_btn">Rent Or Sell Your Place</button>
              <div className="language">
                <AiOutlineArrowRight />
                Login
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
          <div className="nav_logo_title">Rocket<span>Ship</span></div>
        </div>
        <div className="nav_right">
          <div className="social_btn">
            <AiFillFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <AiOutlineTwitter className="icon" />
          </div>
          <div className="nav_right_signin_options">
            <div className="nav_text">FAQs</div>
            <div className="nav_text">Rates</div>
            <div className="nav_text">Contact</div>
            <div className="sign_up">Sign Up</div>
            <div className="log">
              Login
              <AiOutlineArrowRight className="icon" />
            </div>
          </div>
          <div className="ham_burger">
            {["top"].map((anchor) => (
              <React.Fragment key={anchor}>
                <MenuIcon
                  style={{ color: "black" }}
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