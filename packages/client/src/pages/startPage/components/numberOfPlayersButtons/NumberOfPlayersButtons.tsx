import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import '@fontsource/orbitron/400.css';
import classes from './NumberOfPlayersButtons.module.css';

const images = [
  {
    url: 'https://segaretro.org/images/a/a5/Bmo_bomberman3.png',
    title: 'ONE PLAYER',
    width: '50%',
  },
  {
    url: 'https://kit168.com/wp-content/uploads/2015/06/white-bomberman-bomberman-1-kit168.com_.jpg',
    title: 'TWO PLAYERS',
    width: '50%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 300,

  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      fontSize: '1.7rem',
      border: '4px solid currentColor',
    },
  },
}));

export default function NumberOfPlayersButtons() {
  return (
    <Box className={classes.container}>
      {images.map(image => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}>
          <span
            className={classes.imageSrc}
            style={{ backgroundImage: `url(${image.url})` }}
          />
          <span className={`MuiImageBackdrop-root ${classes.imageBackdrop}`} />
          <span className={classes.image}>
            <Typography
              component="span"
              color="inherit"
              className={classes.buttonTitle}
              sx={{
                pb: theme => `calc(${theme.spacing(1)} + 6px)`,
              }}>
              {image.title}
              <span
                className={`MuiImageBackdrop-root ${classes.imageMarked}`}
              />
            </Typography>
          </span>
        </ImageButton>
      ))}
    </Box>
  );
}
