import React from "react";
import {
  Link,
  Typography,
  Button,
  Grid,
  Paper,
  InputAdornment,
  TextField,
  Avatar,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./Login.css";

const Login = () => {
  return (
    <Grid className="GridStyle">
      <Paper className="PaperStyle">
        <Grid align="center">
          <Avatar className="AvatarStyle">
            <LockOutlinedIcon />
          </Avatar>
          <h1>Log In</h1>
        </Grid>
        <TextField
          className="TextFiledStyle"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon className="StartIcons" />
              </InputAdornment>
            ),
          }}
          required
          variant="standard"
          placeholder="Email"
          type="email"
        />

        <TextField
          className="TextFiledStyle"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon className="StartIcons" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment className="EndIcons">
                <VisibilityOffIcon fontSize="12px" />
              </InputAdornment>
            ),
          }}
          required
          variant="standard"
          placeholder="Password"
          type="password"
        />

        <Button fullWidth variant="outlined" type="submit">
          Sign in
        </Button>

        <Typography align="center">
          <Link href="@" variant="body2">
            Forget Paswword?
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
