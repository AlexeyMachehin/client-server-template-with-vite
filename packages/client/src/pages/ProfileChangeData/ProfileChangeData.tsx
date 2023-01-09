import React from 'react';
import { Container, Typography } from '@mui/material';
import ProfileForm from '../../features/Profile/components/ProfileForm/ProfileForm';

const ProfileChangeData = () => {
  return (
    <Container>
      <Typography component="h1" variant="h4" mb={3}>Изменить данные</Typography>
      <ProfileForm />
    </Container>
  )
}

export default ProfileChangeData;