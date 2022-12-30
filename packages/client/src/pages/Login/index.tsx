import { FC } from 'react'
import styles from "./Login.module.css"
import { Avatar, Button, Checkbox, FormControlLabel, Link, TextField } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';


const Login:FC = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainBackground} />
      <div
        className={styles.loginWrapper}
      >
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form noValidate={true}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login

