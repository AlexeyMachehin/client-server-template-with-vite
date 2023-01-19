import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import AsidePanelItem from './asidePanelItem/AsidePanelItem';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AskQuestionModal from './askQuestionModal/AskQuestionModal';
import { forumState } from '../../../../mockData/forumState';
import { IQuestion } from '../../../../../service/types/forumPage/IQuestion';
import { useLocation, useMatch, useMatches, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import classes from './asidePanel.module.css';

interface IAsidePanelProps {
  setFoundQuestions: React.Dispatch<React.SetStateAction<IQuestion[] | null>>
  selectedQuestion: IQuestion | null;
  foundQuestions: IQuestion[] | null;
  setSelectedQuestion: any
  currentMainTheme:
    | 'discussionOfGameMoments'
    | 'technicalIssues'
    | 'errorQuestions'
    | null;
}

const SELECTED_QUESTION_COLOR = '#4caf4f2f';
const DEFAULT_ASIDE_PANEL_WIDTH = 310;

export default function AsidePanel(props: IAsidePanelProps) {
  const [asidePanelWidth, setAsidePanelWidth] = useState<number>(
    DEFAULT_ASIDE_PANEL_WIDTH
  );
  const [isWideAsidePanel, setIsWideAsidePanel] = useState<boolean>(true);
  const [widthButtonTitle, setWidthButtonTitle] = useState<string>('Wide');
  const [widthButtonArrow, setWidthButtonArrow] = useState<JSX.Element>(
    <ArrowForwardIosIcon />
  );

  const navigate = useNavigate();

  const urlParams = useParams();
  const location = useLocation();

  console.log(urlParams)

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

  // const renderAsidePanelItems = (arrayOfItems: IQuestion[] ) => {
  //   return arrayOfItems
  //     .sort((a: IQuestion, b: IQuestion) => a.title.localeCompare(b.title))
  //     .map((question: IQuestion) => (
  //       <AsidePanelItem
  //         isWideAsidePanel={isWideAsidePanel}
  //         key={question.id}
  //         question={question}
  //         color={
  //           question.id === props.selectedQuestion?.id
  //             ? SELECTED_QUESTION_COLOR
  //             : ''
  //         }
  //         setSelectedQuestion={() => props.setSelectedQuestion(question)}
  //       />
  //     ));
  // };
  const renderAsidePanelItems = (arrayOfItems: IQuestion[], selectedQuestionId = null ) => {
    return arrayOfItems
      .sort((a: IQuestion, b: IQuestion) => a.title.localeCompare(b.title))
      .map((question: IQuestion) => {
       
       
       
        return <AsidePanelItem
          isWideAsidePanel={isWideAsidePanel}
          key={question.id}
          question={question}
          color={
            question.id === props.selectedQuestion?.id
              ? SELECTED_QUESTION_COLOR
              : ''
          }
          setSelectedQuestion={() => props.setSelectedQuestion(question)}
        />
      });
  };


  const searchByURLId = (id: string, mainThemes: any) => {
    const foundQuestionsArray: IQuestion[]  = [];
    for (const mainTheme in mainThemes) {
      mainThemes[mainTheme].forEach((question: IQuestion) => {
        if (id === question.id.toString()) {
          foundQuestionsArray.push(question);
        }
      });
    }
    props.setSelectedQuestion(foundQuestionsArray[0])
    return foundQuestionsArray;
  };

  const urlId = (url:any) => {
    let result = '';
    result = url.pathname.split("/")
    return result[result.length - 1] 
  }
  const urlMainPath = (url:any) => {
    let result = '';
    result = url.pathname.split("/")
    return result[result.length - 2] 
  }

 
  return (
    <div className={classes.asidePanelWrapper}>
      <List
        className={classes.asidePanel}
        sx={style}
        component="aside"
        aria-label="mailbox folders">
        <AskQuestionModal currentMainTheme={props.currentMainTheme} />

        <div className={classes.questionsList}>

  

{/* { console.log(urlParams)} */}
{urlParams.questionId && renderAsidePanelItems(forumState[urlMainPath(location)], urlId(location)) 
// :  renderAsidePanelItems(forumState[props.currentMainTheme], null) 
}




        </div>

        <div className={classes.asidePanelFooter}>
          <Link
            className={classes.goBackLink}
            onClick={() => {
              navigate('/forum/main');
            }}>
            Go back to main list
          </Link>

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
