import { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { forumState } from '../../../mockData/forumState';
import { IQuestion } from '../../../../service/types/forumPage/IQuestion';
import classes from './header.module.css';
import { useNavigate, useParams } from 'react-router-dom';

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
  currentMainTheme:
    | 'discussionOfGameMoments'
    | 'technicalIssues'
    | 'errorQuestions'
    | null;

  setFoundQuestions: React.Dispatch<React.SetStateAction<null>>;
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
  // console.log(useParams());
  useEffect(() => {
    if (window.location.pathname === '/forum/mainList') {
      if (searchInput.current) {
        props.setCurrentMainTheme(null);
        searchInput.current.value = '';
      }
    }
  }, [window.location.pathname]);

  const searchQuestion = (inputValue: string, mainThemes: any ) => {
    for (const mainTheme in mainThemes) {
      const foundQuestionsArray: IQuestion[] | [] = [];
      mainThemes[mainTheme].forEach((question: IQuestion) => {
        const regExp = new RegExp(`${inputValue.toLowerCase()}`);
        const value = question.title.toLowerCase();
        if (regExp.test(value)) {
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
    // searchQuestion(searchInputValue, forumState.forumState);
    searchQuestion(
      searchInputValue,
      forumState.forumState,
      props.setFoundQuestions
    );
    if (searchInputValue.length > 0) {
      //
      // props.setFoundQuestions(foundQuestionsArray);
      //
      navigate('foundQuestions');
    } else {
      props.setFoundQuestions(null);
      props.currentMainTheme
        ? navigate(`mainList/${props.currentMainTheme?.toString()}`)
        : navigate('mainList');
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
      <div className={classes.titleWrapper}>
        <Typography variant="h6" className={classes.headerTitle}>
          Forum
        </Typography>
      </div>
    </div>
  );
}
