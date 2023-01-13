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
  selectedItemId: number;
  selectedQuestion: IQuestion | null;
  foundQuestions: any;
  handleSelectedQuestion: (selectedQuestion: IQuestion) => void;
  currentMainTheme:
    | 'discussionOfGameMoments'
    | 'technicalIssues'
    | 'errorQuestions'
    | null;
}
const SELECTED_QUESTION_COLOR = '#4caf4f2f';
const DEFAULT_ASIDE_PANEL_WIDTH = 310;

export default function AsidePanel(props: IAsidePanelProps) {
  // console.log(props.currentMainTheme);
  console.log(props.foundQuestions);
  const [asidePanelWidth, setAsidePanelWidth] = useState<number>(
    DEFAULT_ASIDE_PANEL_WIDTH
  );
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

  const onResize = () => {
    setAsidePanelWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    if (asidePanelWidth !== DEFAULT_ASIDE_PANEL_WIDTH) {
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
    if (asidePanelWidth === DEFAULT_ASIDE_PANEL_WIDTH) {
      setAsidePanelWidth(
        document.documentElement.clientWidth -
          document.documentElement.clientWidth * 0.3
      );
    } else {
      setAsidePanelWidth(DEFAULT_ASIDE_PANEL_WIDTH);
    }
  };

  const style = {
    width: asidePanelWidth + 'px',
    bgcolor: 'background.paper',
  };

  const renderAsidePanelItems = (arrayOfItems: any) => {
    return arrayOfItems
      .sort((a: any, b: any) => a.title.localeCompare(b.title))
      .map((question: IQuestion) => (
        <AsidePanelItem
          isWideAsidePanel={isWideAsidePanel}
          key={question.id}
          question={question}
          color={
            question.id === props.selectedQuestion?.id
              ? SELECTED_QUESTION_COLOR
              : ''
          }
          handleSelectedQuestion={() => props.handleSelectedQuestion(question)}
        />
      ));
  };

  return (
    <div className={classes.asidePanelWrapper}>
      <List
        className={classes.asidePanel}
        sx={style}
        component="aside"
        aria-label="mailbox folders">
        <AskQuestionModal currentMainTheme={props.currentMainTheme} />

        <div className={classes.questionsList}>
          {props.foundQuestions
            ? renderAsidePanelItems(props.foundQuestions)
            : props.currentMainTheme
            ? renderAsidePanelItems(
                forumState.mainThemes[props.currentMainTheme]
              )
            : null}
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
