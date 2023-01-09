import React from 'react'
import { Button, Stack, TextField } from '@mui/material'

const ProfileForm = () => {
  return (
    <form noValidate>
      <Stack spacing={1} width={{xs: '100%', md: '50%'}} mb={2}>
        <TextField
          required
          id="firstName"
          label="Имя"
          name="firstName"
          autoFocus
        />
        <TextField
          required
          id="secondName"
          label="Фамилия"
          name="secondName"
        />
        <TextField
          required
          id="displayName"
          label="Имя в игре"
          name="displayName"
        />
        <TextField
          required
          id="login"
          label="Логин"
          name="login"
        />
        <TextField
          required
          id="email"
          label="Email"
          name="email"
        />
        <TextField
          required
          id="phone"
          label="Телефон"
          name="phone"
        />
      </Stack>
      <Button type="submit" variant="contained">Сохранить</Button>
    </form>
  )
}

export default ProfileForm