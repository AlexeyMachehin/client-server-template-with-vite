import { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { forumState } from '../../../mockData/forumState';
import { IQuestion } from '../../../../service/types/forumPage/IQuestion';
import classes from './header.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import DashBoard from './dashBoard/DashBoard';

const Search = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

interface IHeaderProps {
  setSelectedQuestion: (selectedQuestion: IQuestion | null) => void;
  foundQuestions: IQuestion[] | null;
  currentMainTheme:
    | 'discussionOfGameMoments'
    | 'technicalIssues'
    | 'errorQuestions'
    | null;

  setFoundQuestions: React.Dispatch<React.SetStateAction<IQuestion[] | null>>;
  setCurrentMainTheme: React.Dispatch<
    React.SetStateAction<
      'discussionOfGameMoments' | 'technicalIssues' | 'errorQuestions' | null
    >
  >;
}

// export const searchQuestion = (
//   inputValue: any,
//   mainThemes: any,
//   callback?: any
// ) => {
//   const foundQuestionsArray: IQuestion[] = [];
//   for (const mainTheme in mainThemes) {
//     mainThemes[mainTheme].forEach((question: IQuestion) => {
//       const regExp = new RegExp(`${inputValue.toLowerCase()}`);
//       const value = question.title.toLowerCase();
//       if (regExp.test(value)) {
//         foundQuestionsArray.push(question);
//       }
//     });
//   }
//   if (callback) {
//     callback(foundQuestionsArray);
//   } else {
//     return foundQuestionsArray;
//   }
// };

export default function Header(props: IHeaderProps) {
  const searchInput = useRef<null | JSX.IntrinsicElements['input']>(null);
  const navigate = useNavigate();
  const searchInputValuef = searchInput.current?.value as string;
  const [mainTheme, setMainTheme] = useState<string | null>(null);

  // useEffect(() => {
  //   if (window.location.pathname === '/forum/mainList') {
  //     if (searchInput.current) {
  //       props.setCurrentMainTheme(null);
  //       searchInput.current.value = '';
  //     }
  //   }
  //   if (
  //     window.location.pathname === '/forum/foundQuestions' &&
  //     props.foundQuestions === null &&
  //     props.currentMainTheme === null
  //   ) {
  //     navigate('mainList');
  //   }
  // }, [window.location.pathname]);



  const searchQuestion = (inputValue: string, mainThemes: any) => {
    for (const mainTheme in mainThemes) {
      const foundQuestionsArray: IQuestion[] = [];
      mainThemes[mainTheme].forEach((question: IQuestion) => {
        const regExp = new RegExp(`${inputValue.toLowerCase()}`);
        const value = question.title.toLowerCase();
        if (regExp.test(value)) {
          // console.log(mainTheme, question);
          setMainTheme(mainTheme);
          foundQuestionsArray.push(question);
          props.setFoundQuestions(foundQuestionsArray);
        }
      });
    }
  };

  // const searchQuestion = (inputValue: string, mainThemes: any) => {
  //   for (const mainTheme in mainThemes) {
  //     const foundQuestionsArray: IQuestion[] | [] = [];
  //     mainThemes[mainTheme].forEach((question: IQuestion) => {
  //       const regExp = new RegExp(`${inputValue.toLowerCase()}`);
  //       const value = question.title.toLowerCase();
  //       if (regExp.test(value)) {
  //         foundQuestionsArray.push(question);
  //         return foundQuestionsArray
  //       }else {
  //         return []
  //       }
  //     });
  //   }
  // };

  const handleOnChangeInput = () => {
    const searchInputValue = searchInput.current?.value as string;
    searchQuestion(searchInputValue, forumState);

    // if (searchInputValue.length > 0) {

    //   navigate('foundQuestions');
    // } else {
    //   props.setFoundQuestions(null);
    //   props.currentMainTheme
    //     ? navigate(`${props.currentMainTheme?.toString()}`)
    //     : navigate('mainList');
    // }

    if (searchInputValue.length === 0) {
      props.setFoundQuestions(null);
    }
  };

  return (
    <div className={classes.header}>
      <Search
        className={classes.searchInputWrapper}
        onChange={handleOnChangeInput}>
        <SearchIconWrapper className={classes.searchInputIconWrapper}>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          className={classes.searchInput}
          inputRef={searchInput}
          placeholder="Find a question"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      {/* <DashBoard2 foundQuestions={props.foundQuestions}/> */}
      {props.foundQuestions && (
        <DashBoard
          foundQuestions={props.foundQuestions}
          mainTheme={mainTheme}
          setFoundQuestions={props.setFoundQuestions}
          setSelectedQuestion={props.setSelectedQuestion}
        />
      )}

      <div className={classes.titleWrapper}>
        <Typography variant="h6" className={classes.headerTitle}>
          Forum
        </Typography>
      </div>
    </div>
  );
}
