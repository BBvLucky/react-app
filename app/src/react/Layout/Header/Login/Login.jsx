import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

import "../../../../style.scss";

class Login extends Component {
    render() {
        return (
        <div className="login">
            <h2 className="login-caption">Log In</h2>
            <form autoComplete="off">
                <TextField
                    id="outlined-email-input"
                    label="Login"
                    type="text"
                    name="login"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                />
                <Button variant="outlined" color="primary">Sign In</Button>
                <Button variant="outlined" color="primary">Sign Up</Button>
           </form>
        </div>
        )
    }
}

export default Login;