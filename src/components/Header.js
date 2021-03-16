import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar.png";

const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="Martin" />
      <Typography variant="h4">
        <Typed strings={["Martin Gonsalves"]} typeSpeed={30} />
      </Typography>
      <br />
      <Typography variant="h5">
        <Typed
          strings={["HTML", "CSS", "JAVASCRIPT", "REACT", "Frontend Developer"]}
          typeSpeed={80}
          backSpeed={40}
        />
      </Typography>
    </Box>
  );
};

export default Header;
