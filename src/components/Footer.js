import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{display: "flex", justifyContent: "space-between", backgroundColor: "black"}}>
          <Typography>FilmSphere</Typography>{" "}
          <Button
            component={Link}
            to="/about"
            sx={{ color: "white", backgroundColor: "grey", textAlign: "center" }}
          >
            About US
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
