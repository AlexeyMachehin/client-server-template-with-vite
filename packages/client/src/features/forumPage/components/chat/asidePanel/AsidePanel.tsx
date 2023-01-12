import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import AsidePanelItem from './asidePanelItem/AsidePanelItem';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AskQuestionModal from './askQuestionModal/AskQuestionModal';
import { forumState } from '../../../mockData';
import { IQuestion } from '../../../../../service/types/forumPage/IQuestion';
import classes from './asidePanel.module.css';

interface IAsidePanelProps {
  handleSelectedQuestion: (selectedQuestion: IQuestion) => void;
  selectedItemId: number;
}

export default function AsidePanel(props: IAsidePanelProps) {
  const [asidePanelWidth, setAsidePanelWidth] = useState<number>(310);
  const [isWideAsidePanel, setIsWideAsidePanel] = useState<boolean>(true);
  const [widthButtonTitle, setWidthButtonTitle] = useState<string>('Wide');
  const [widthButtonArrow, setWidthButtonArrow] = useState<JSX.Element>(
    <ArrowForwardIosIcon />
  );

  const handleButtonProperties = () => {
    if (isWideAsidePanel === true) {
      setIsWideAsidePanel(false);
      setWidthButtonTitle('Narrow');
      setWidthButtonArrow(<ArrowBackIosNewIcon />);
    } else {
      setIsWideAsidePanel(true);
      setWidthButtonTitle('Wide');
      setWidthButtonArrow(<ArrowForwardIosIcon />);
    }
  };

  function onResize() {
    setAsidePanelWidth(document.documentElement.clientWidth);
  }

  useEffect(() => {
    if (asidePanelWidth !== 310) {
      window.addEventListener('resize', onResize);
      setAsidePanelWidth(
        document.documentElement.clientWidth -
          document.documentElement.clientWidth * 0.3
      );
    }

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [asidePanelWidth]);

  const handleWidth = () => {
    if (asidePanelWidth === 310) {
      setAsidePanelWidth(
        document.documentElement.clientWidth -
          document.documentElement.clientWidth * 0.3
      );
    } else {
      setAsidePanelWidth(310);
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
        <AskQuestionModal />

        <div className={classes.questionsList}>
          {forumState.errorQuestions
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((question: IQuestion) => (
              <AsidePanelItem
                isWideAsidePanel={isWideAsidePanel}
                key={question.id}
                question={question}
                color={question.id === props.selectedItemId ? '#4caf4f2f' : ''}
                handleSelectedQuestion={() =>
                  props.handleSelectedQuestion(question)
                }
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
