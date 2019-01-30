import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Home from "@material-ui/icons/Home";
import Category from "@material-ui/icons/Category";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import BubbleChart from "@material-ui/icons/BubbleChart";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: "10px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  selected: {
    color: "primary"
  }
});

class Navbar extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <Button component={NavLink} activeClassName={classes.selected} to="/">
            <IconButton color="inherit">
              <Home />
            </IconButton>
            <p>Home</p>
          </Button>
        </MenuItem>
        <MenuItem>
          <Button
            component={NavLink}
            activeClassName={classes.selected}
            to="/categories"
          >
            <IconButton color="inherit">
              <Category />
            </IconButton>
            <p>Categories</p>
          </Button>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <Button
            activeClassName={classes.selected}
            component={NavLink}
            to="/login"
          >
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <p>Login</p>
          </Button>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Button component={NavLink} to="/" style={{ color: "#fff" }}>
              <BubbleChart style={{ margin: "0 5px", fontSize: "3rem" }} />
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                noWrap
              >
                BookStore
              </Typography>
            </Button>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button
                style={{ color: "#fff" }}
                component={NavLink}
                exact
                to="/"
                activeStyle={{ color: "#757de8", backgroundColor: "#fff" }}
              >
                <Home />
                <p style={{ margin: "0 10px" }}>Home</p>
              </Button>
              <Button
                style={{ marginLeft: "10px", color: "#fff" }}
                component={NavLink}
                to="/categories"
                activeStyle={{ color: "#757de8", backgroundColor: "#fff" }}
              >
                <Category />
                <p style={{ margin: "0 10px" }}>Categories</p>
              </Button>
              <Button
                style={{ marginLeft: "10px", color: "#fff" }}
                component={NavLink}
                to="/login"
                activeStyle={{ color: "#757de8", backgroundColor: "#fff" }}
              >
                <AccountCircle />
                <p style={{ margin: "0 10px" }}>Login</p>
              </Button>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
