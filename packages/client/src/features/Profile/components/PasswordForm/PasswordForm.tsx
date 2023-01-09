import React from 'react'
import { Button, Stack, TextField } from '@mui/material'

const PasswordForm = () => {
  return (
    <form noValidate>
      <Stack spacing={1} width={{xs: '100%', md: '50%'}} mb={2}>
        <TextField
          required
          id="oldPassword"
          label="Текущий пароль"
          name="oldPassword"
          type="password"
        />
        <TextField
          required
          id="newPassword"
          label="Новый пароль"
          name="newPassword"
          type="password"
        />
      </Stack>
      <Button type="submit" variant="contained">Сохранить</Button>
    </form>
  )
}

export default PasswordForm;