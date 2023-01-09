import React from 'react'
import { Box, Container, Grid, Typography, List, ListItem, Divider, ListItemText, Stack, Button } from '@mui/material'
import { EmojiEvents } from '@mui/icons-material';

// Temporary data
const user = {
  id: 123,
  firstName: 'Petya',
  secondName: 'Pupkin',
  displayName: 'PetyaTop',
  login: 'userLogin',
  email: 'my@email.com',
  phone: '89223332211',
  avatar: '/path/to/avatar.jpg',
  record: '2530'
}

const Profile = () => {
  return (
    <Container>
      <Typography component="h1" variant="h4" mb={3}>Профиль</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>

          {/*todo bo-22 avatar-component*/}
          <Box sx={{height: 200, width: 200, bgcolor: '#ccc', mb: 1}}>
            Profile Avatar
          </Box>

          <Typography component="h3" variant="h5" mb={1}>{user.firstName} {user.secondName}</Typography>

          <Stack direction="row" spacing={1} alignItems="center" mb={3}>
            <EmojiEvents fontSize="large" sx={{color: 'orange'}}/>
            <Typography variant="h6">{user.record}</Typography>
          </Stack>

          <Button variant="outlined" component="label">
            Загрузить аватар
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>
        <Grid item xs={12} md={9}>
          <List>
            <ListItem disableGutters>
              <ListItemText primary="Имя" secondary={user.firstName} />
            </ListItem>
            <Divider/>
            <ListItem disableGutters>
              <ListItemText primary="Фамилия" secondary={user.secondName} />
            </ListItem>
            <Divider/>
            <ListItem disableGutters>
              <ListItemText primary="Имя в игре" secondary={user.displayName} />
            </ListItem>
            <Divider/>
            <ListItem disableGutters>
              <ListItemText primary="Логин" secondary={user.login} />
            </ListItem>
            <Divider/>
            <ListItem disableGutters>
              <ListItemText primary="Email" secondary={user.email} />
            </ListItem>
            <Divider/>
            <ListItem disableGutters>
              <ListItemText primary="Телефон" secondary={user.phone} />
            </ListItem>
            <Divider/>
          </List>
          <Stack direction="row" spacing={1} py={2}>
            <Button variant="outlined">
              Изменить данные
            </Button>
            <Button variant="outlined">
              Изменить пароль
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Profile;