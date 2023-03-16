import * as React from "react";
import styles from "./BottomBar.module.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function BottomBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className={`${styles[`bottom-bar-container`]}`}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{ backgroundColor: "black" }}
      >
        <BottomNavigationAction component={Link} to="/" icon={<HomeIcon />} style={{ color: "white" }} />
        <BottomNavigationAction component={Link} to="/feed" icon={<LanguageIcon />} style={{ color: "white" }} />
        <BottomNavigationAction component={Link} to="/playground" icon={<LocalBarIcon />} style={{ color: "white" }} />
        <BottomNavigationAction component={Link} to="/mypage" icon={<AccountCircleIcon />} style={{ color: "white" }} />
      </BottomNavigation>
    </Box>
  );
}

export default BottomBar;