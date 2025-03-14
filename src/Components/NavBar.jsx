import "./NavBar.scss";
import { LinkedIn, GitHub } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import SideBar from "./SideBar/SideBar";
const NavBar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ type: "spring", stiffness: 1000 }}
        >
          Shankar
        </motion.span>
        <div className="social">
          <Tooltip title="LinkedIn">
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/ch-d-g-shankar-bonam-002bb2321"
              target="_blank"
              className="icons"
            >
              <LinkedIn sx={{ fontSize: 30, color: "#0077B5" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="LeetCode">
            <IconButton
              component="a"
              className="icons"
              href="https://leetcode.com/u/shenkarb762/"
              target="_blank"
            >
              <TerminalIcon
                sx={{
                  fontSize: 30,
                  color: "green",
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="CodeChef">
            <IconButton
              component="a"
              className="icons"
              href="https://www.codechef.com/users/shankar_s58"
              target="_blank"
            >
              <CodeIcon
                sx={{
                  fontSize: 30,
                  color: "blue",
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="HackerRank">
            <IconButton
              component="a"
              className="icons"
              href="https://www.hackerrank.com/profile/shankarpubg4"
              target="_blank"
            >
              <AssessmentIcon
                sx={{
                  fontSize: 30,
                  color: "red",
                }}
              />
            </IconButton>
          </Tooltip>

          {/* GitHub */}
          <Tooltip title="GitHub">
            <IconButton
              component="a"
              className="icons"
              href="https://github.com/Shankars57?tab=repositories"
              target="_blank"
            >
              <GitHub
                sx={{
                  fontSize: 30,
                  color: "white",
                }}
              />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
