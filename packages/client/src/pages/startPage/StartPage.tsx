import NavigateLinks from '../../features/startPage/components/navigateLinks/NavigateLinks';
import NumberOfPlayersButtons from '../../features/startPage/components/numberOfPlayersButtons/NumberOfPlayersButtons';
import classes from './startPage.module.css';

export default function StartPage() {
  return (
    <div className={classes.startPageWrapper}>
      <h1 className={classes.startPageTitle}>BOMBERMAN</h1>
      <NumberOfPlayersButtons />
      <NavigateLinks />
    </div>
  );
}
