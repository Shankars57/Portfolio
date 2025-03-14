import React from "react";
import "./toggle.scss";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const ToggleBtn = ({ open ,setOpen }) => {
  return (
    <IconButton className="button" onClick={() => setOpen((prev) => !prev)}>
      {open ? (
        <CloseIcon sx={{ color: "black" }} />
      ) : (
        <MenuIcon sx={{ color: "black" }} />
      )}
    </IconButton>
  );
};

export default ToggleBtn;
