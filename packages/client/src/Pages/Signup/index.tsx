import { FC } from 'react'
import styles from "./Signup.module.css"
import { Avatar, Button, TextField } from '@mui/material'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Typography from '@mui/material/Typography';


const Signup:FC = () => {
  return (
    <div className={styles.mainWrapper}>
      <div
        className={styles.loginWrapper}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} >
          <CheckBoxIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Signup
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
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="Surname"
            label="Surname"
            name="surname"
            autoComplete="surname"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="Phone"
            label="Phone"
            name="phone"
            autoComplete="phone"
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="password-again"
            label="Password-Again"
            type="password-again"
            id="password-again"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <div className={styles.mainBackground} />
    </div>
  )
}

export default Signup

