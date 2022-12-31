import { FC, useState } from 'react'
import styles from "./Login.module.css"
import { Avatar, Button, Checkbox, FormControlLabel, Link, TextField } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { authService } from '../../service/AuthService'
import { ILoginFormValues, useLoginFormik } from '../../features/Login/hooks/useLoginFormik'
import Alert from '@mui/material/Alert';


const Login:FC = () => {
  const [loginStatus, setLoginStatus] = useState<null | string>(null)

  const handleSubmit = async (values: ILoginFormValues) => {
    try {
      await authService.login({
        login: values.login,
        password: values.password,
      })
      setLoginStatus(null)
    } catch (e) {
      if(typeof e === "string") {
        setLoginStatus(e)
      }
    }
  }
  const formik = useLoginFormik({onSubmit: handleSubmit})

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
        <form onSubmit={formik.handleSubmit}>
          <TextField
            value={formik.values.login}
            onChange={formik.handleChange}
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
            autoFocus
            error={formik.touched.login && Boolean(formik.errors.login)}
            helperText={formik.touched.login && formik.errors.login}
          />
          <TextField
            value={formik.values.password}
            onChange={formik.handleChange}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {loginStatus && <Alert severity="error">{loginStatus}</Alert>}
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

