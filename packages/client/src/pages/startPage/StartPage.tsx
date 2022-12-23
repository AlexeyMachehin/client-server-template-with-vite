import NavigateLinks from './components/navigateLinks/NavigateLinks';
import NumberOfPlayersButtons from './components/numberOfPlayersButtons/NumberOfPlayersButtons';
import classes from './StartPage.module.css';

export default function StartPage() {
  return (
    <div className={classes.startPageWrapper}>
      <div className={classes.startPageTitle}>BOMBERMAN</div>
      <NumberOfPlayersButtons />
      <NavigateLinks />
    </div>
  );
}
