import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = {
  paper: {
    padding: "40px",
    margin: "20px auto",
    textAlign: "center",
    maxWidth: "600px"
  },
  textField: {
    margin: "10px auto",
    width: "250px"
  },
  button: {
    margin: "25px auto"
  },
  line: {
    position: "relative",
    "&::before": {
      position: "absolute",
      content: "''",
      height: "1px",
      width: "45%",
      top: "50%",
      left: "0",
      background: "#000"
    },
    "&::after": {
      position: "absolute",
      content: "''",
      height: "1px",
      width: "45%",
      top: "50%",
      right: "0",
      background: "#000"
    }
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="container" style={{ minHeight: "100vh" }}>
        <Paper className={classes.paper}>
          <Typography
            variant="h1"
            component="h1"
            style={{ marginBottom: "40px" }}
          >
            Login
          </Typography>
          <TextField
            label="Username"
            placeholder="Enter your username"
            className={classes.textField}
          />
          <br />
          <TextField
            type="password"
            label="Password"
            placeholder="Enter your password"
            className={classes.textField}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            component={Link}
            to="/"
          >
            Submit
          </Button>
          <p className={classes.line}>OR</p>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            component={Link}
            to="/signup"
          >
            Sign Up
          </Button>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
