import React, { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Avatar,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { styled } from "@mui/system";
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
} from "@mui/material";
import { testAvatar } from "../../assets/images";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const CNavbar = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    console.log("Run login");
  };
  const handleLogout = () => {
    handleClose();
    setIsAuthenticated(false);
    console.log("Run logout");
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (
      event &&
      anchorRef.current &&
      anchorRef.current.contains(event.target)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false && anchorRef.current) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <AppBar position="static">
      <StyledToolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* <Logo /> */}
          <Typography variant="h6">MyApp</Typography>
        </IconButton>
        <Stack sx={{ display: "flex", flexDirection: "row", gap: "35px" }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Course</Button>
          <Button color="inherit">
            Blog
            <LaunchIcon />
          </Button>
          <Button color="inherit">FAQ</Button>
        </Stack>

        {/* avatar */}
        {isAuthenticated ? (
          <Stack direction="row" alignItems="center" spacing={3}>
            <Avatar src={testAvatar} spacing={2} />
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              sx={{ color: "#fff" }}
            >
              <Stack>
                <Typography fontSize={13}>Hi HungTham</Typography>
                <Typography fontSize={13}>FrontEnd Developer</Typography>
              </Stack>
            </Button>

            {open && (
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <Tooltip title="Account settings">
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>

                            <MenuItem
                              onClick={() => {
                                handleLogout();
                              }}
                            >
                              Logout
                            </MenuItem>
                          </MenuList>
                        </Tooltip>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            )}
          </Stack>
        ) : (
          <Stack>
            <Button sx={{ color: "#fff" }} onClick={() => handleLogin()}>
              Login
            </Button>
          </Stack>
        )}
      </StyledToolbar>
    </AppBar>
  );
};

export default CNavbar;
