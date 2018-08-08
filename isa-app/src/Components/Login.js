import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h1> Login </h1>
        <TextField
          id="email"
          label="email"
          value={this.state.email}
          onChange={this.handleChange("email")}
          margin="normal"
        />
        <br />
        <TextField
          id="password"
          label="password"
          value={this.state.password}
          onChange={this.handleChange("password")}
          margin="normal"
        />
        <br />
        <Button variant="contained" color="primary">
          {" "}
          Submit{" "}
        </Button>
        <br />
        <Button variant="contained" color="secondary">
          {" "}
          Create Account{" "}
        </Button>
      </div>
    );
  }
}

export default Login;
