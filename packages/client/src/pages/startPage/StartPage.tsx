import NavigateLinks from './components/navigateLinks/NavigateLinks';
import NumberOfPlayersButtons from './components/numberOfPlayersButtons/NumberOfPlayersButtons';
import classes from './StartPage.module.css';

export default function StartPage() {
  return (
    <div className={classes.startPageWrapper}>
      <h1 className={classes.startPageTitle}>BOMBERMAN</h1>
      <NumberOfPlayersButtons />
      <NavigateLinks />
    </div>
  );
}
