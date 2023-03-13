import NavigateLinks from '../../features/startPage/components/navigateLinks/NavigateLinks';
import NumberOfPlayersButtons from '../../features/startPage/components/numberOfPlayersButtons/NumberOfPlayersButtons';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import classes from './startPage.module.css';
import { ThemeToggler } from '@/features/theme/ThemeToggler';

const theme = createTheme({
  typography: {
    fontFamily: 'Orbitron',
  },
});

export default function StartPage() {
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.startPageWrapper}>
        <Typography variant="h2" className={classes.startPageTitle}>
          BOMBERMAN
        </Typography>
        <NumberOfPlayersButtons />
        <NavigateLinks />
        <ThemeToggler />
      </div>
    </ThemeProvider>
  );
}
