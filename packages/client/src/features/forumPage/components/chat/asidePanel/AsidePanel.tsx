import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import classes from './asidePanel.module.css';
import AsidePanelItem from './asidePanelItem/AsidePanelItem';
import CreateIcon from '@mui/icons-material/Create';
import { forumState } from '../../../mockData';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function AsidePanel(props: any) {
  const [asidePanelWidth, setAsidePanelWidth] = useState(310);
  const [togglerWidthButton, setTogglerWidthButton] = useState(true);
  const [widthButtonTitle, setWidthButtonTitle] = useState('Full width');
  const [widthButtonArrow, setWidthButtonArrow] = useState(
    <ArrowForwardIosIcon />
  );

  const handleButtonProperties = () => {
    if (togglerWidthButton === true) {
      setTogglerWidthButton(false);
      setWidthButtonTitle('Narrow');
      setWidthButtonArrow(<ArrowBackIosNewIcon />);
    } else {
      setTogglerWidthButton(true);
      setWidthButtonTitle('Full width');
      setWidthButtonArrow(<ArrowForwardIosIcon />);
    }
  };

  function test() {
    setAsidePanelWidth(document.documentElement.clientWidth);
  }

  const handleWidth = () => {
    if (asidePanelWidth === 310) {
      setAsidePanelWidth(
        document.documentElement.clientWidth -
          document.documentElement.clientWidth * 0.3
      );

      window.addEventListener('resize', test);

      // window.onresize = () => {
      //   setAsidePanelWidth(document.documentElement.clientWidth);
      // };
    } else {
      setAsidePanelWidth(310);
      window.removeEventListener('resize', test);
    }
  };

  const style = {
    width: asidePanelWidth + 'px',
    bgcolor: 'background.paper',
  };

  return (
    <div className={classes.asidePanelWrapper}>
      <List
        className={classes.asidePanel}
        sx={style}
        component="aside"
        aria-label="mailbox folders">
        <ListItem style={{ height: '58px' }} button>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: 'var(--nextLevelButton)' }}>
              <CreateIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Ask a question" />
        </ListItem>
        <Divider />

        <div className={classes.questionsList}>
          {forumState.errorQuestions
            .sort((a, b) => a.title.localeCompare(b.title))
            .map(item => (
              <AsidePanelItem
                togglerWidthButton={togglerWidthButton}
                key={item.id}
                item={item}
                color={item.id === props.selectedItemId ? '#4caf4f2f' : ''}
                handleSelectedItem={() => props.handleSelectedItem(item)}
              />
            ))}
        </div>

        <div className={classes.asidePanelFooter}>
          <Link href="#">Go back</Link>
          <Button
            onClick={() => {
              handleWidth();
              handleButtonProperties();
            }}
            variant="outlined"
            endIcon={widthButtonArrow}>
            {widthButtonTitle}
          </Button>
        </div>
      </List>
    </div>
  );
}
