import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../../../api/login.api";
import { setLocalStorage } from "../../../utils/Storage";
import { setCookie } from "../../../utils/Cookies";
import FormControl from "@mui/material/FormControl";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { blue} from "@mui/material/colors";
import AMBackdrop from '../../layouts/navigations/AMBackdrop';
import AMAlert from '../../layouts/navigations/AMAlert';
import $ from 'jquery';

const Login = (props) => {
  let navigate = useNavigate();
  let location = useLocation();
  const [error, setError] = React.useState("");
  const [errorColor, setErrorColor] = React.useState("error");
  const [open, setOpen] = React.useState(false);
  const [required, setRequired] = React.useState({
    email: false,
    password: false,
  });
 
  React.useEffect(()=>{
    $('title').html('Login | Admin');
    //
    $(window).scrollTop(0,0);
  },[]);

  /**
   *
   * LOCAL LOGIN
   */
  const handleLocalLogin = async (e) => {
    setError("");
    setAlertOpen(true);
    setOpen(true);
    setRequired({
      ...required,
      email: false,
    });
    setRequired({
      ...required,
      password: false,
    });
    e.preventDefault();
    if (!(values.email && values.password)) {
      let isEmail, isPassword;
      if (!values.email) {
        isEmail = true;
      }
      if (!values.password) {
        isPassword = true;
      }
      setRequired({
        ...required,
        email: isEmail,
        password: isPassword,
      });
      setOpen(false);
      return;
    }

    let res = login.local(values.email, values.password);
    console.log(res)
    if (res.status) {
        setError("Success, redirecting ...");
        setErrorColor("success");
        window.localStorage.removeItem("access");
        window.localStorage.removeItem("user");
        setLocalStorage("access", res.access);
        setCookie("refresh", res.refresh, 7);
        console.log(res)
        setTimeout(() => {
          setOpen(false);
          let from = location.state?.from?.pathname || "/user";
          navigate(from, { replace: true });
        }, 100);
    } 
    else{
        setOpen(false);
        setError("User is not exist!");
        setErrorColor("error");
    }

  };
  
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setRequired({
      ...required,
      [prop]: false,
    });
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [alertOpen, setAlertOpen] = React.useState(true);
  return (
    <>
    <AMBackdrop
      open={open}
      />
      <Grid
      direction='row'
      container
      justifyContent='center'
      alignItems='center'
      sx={{mt:7}}
      >
        <Grid xs={0} md={2}></Grid>
        <Grid xs={12} md={6} lg={4} sx={{p:2,}}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt:5,
          }}
          >
         
          </Box>
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 1,
            bgcolor: "background.paper",
            mt: 0,
            mb: 10,
          }}
        >
          <Box
              sx={{
                width: `100%`,
                p: 2,
              }}
            >
              <Box
                sx={{
                  p: 2,
                  mt: -6,
                  borderRadius: 2,
                }}
              >
                <Avatar sx={{ m: "auto", bgcolor: "#e65100" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography
                  className="other-text"
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    mt: 1,
                    textAlign: "center",
                  }}
                >
                  Login
                </Typography>
              </Box>
            </Box>
          <Box
            component="form"
            onSubmit={handleLocalLogin}
            noValidate
            sx={{ mt: -3, p: 4 }}
          >
            <Grid
              container
              justifyContent="center"
              alignItem="center"
              columnGap={1}
              spacing={0}
            >
              <Grid item xs="10" className='other-text'>
              {
                   error?
                   <>
                   <AMAlert
                    alertTextColor={errorColor}
                    alertText={error}
                   />
                   </>
                   :
                   <>
                   
                   </>
                 }
                <FormControl
                  sx={{ width: "100%", mt: 2 }}
                  variant="outlined"
                  color={required.email ? "error" : "primary"}
                  focused={required.email ? true : false}
                  className='other-text'
                >
                  <InputLabel
                    htmlFor="outlined-adornment-lastname"
                    className='other-text'
                    sx={{ fontSize: 12 }}
                  >
                    {required.email ? "* Required" : "Email"}
                  </InputLabel>
                  <OutlinedInput
                    type={`email`}
                    value={values.email}
                    onChange={handleChange("email")}
                    sx={{ fontSize: 12 }}
                    id="email"
                    className='other-text'
                    label="Email Address"
                    name="email"
                  />
                </FormControl>
                <FormControl
                  sx={{ width: "100%", mt: 2 }}
                  variant="outlined"
                  color={required.password ? "error" : "primary"}
                  focused={required.password ? true : false}
                  className='other-text'
                >
                  <InputLabel
                    htmlFor="outlined-adornment-password"
                    className='other-text'
                    sx={{ fontSize: 12 }}
                  >
                    {required.password ? "* Required" : "Password"}
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    sx={{ fontSize: 12 }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    className='other-text'
                  />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color={`secondary`}
                  sx={{ mt: 3, mb: 1, height: 41 }}
                  className='other-text'
                >
                  Sign In
                </Button>
              </Grid>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="/"
                    variant="body2"
                    sx={{ fontSize: 12, color: `#e65100`, fontWeight: 700 }}
                  >
                    <Typography variant="h6" className='other-text' sx={{color: blue[600]}}>Forgot password?</Typography>
                  </Link>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Grid>
        <Grid xs={0} md={2}></Grid>
      </Grid>
    </>
  );
};
export default Login;