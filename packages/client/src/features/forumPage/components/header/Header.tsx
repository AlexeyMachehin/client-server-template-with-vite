import { useRef } from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { forumState } from '../../mockData';
import classes from './header.module.css';

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
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFoundQuestions: React.Dispatch<React.SetStateAction<null>>;
  setCurrentMainTheme: React.Dispatch<
    React.SetStateAction<
      'discussionOfGameMoments' | 'technicalIssues' | 'errorQuestions' | null
    >
  >;
}

export default function Header(props: IHeaderProps) {
  const searchInput = useRef<null | JSX.IntrinsicElements['input']>(null);

  const searchQuestion = (inputValue: string, mainThemes: any) => {
    for (const mainTheme in mainThemes) {
      const foundQuestionsArray: any = [];
      mainThemes[mainTheme].forEach((question: any) => {
        const regExp = new RegExp(`${inputValue.toLowerCase()}`);
        const value = question.title.toLowerCase();
        if (regExp.test(value)) {
          foundQuestionsArray.push(question);
          props.setFoundQuestions(foundQuestionsArray);
        }
      });
    }
  };

  const handleOnChangeInput = () => {
    const searchInputValue = searchInput.current?.value as string;
    searchQuestion(searchInputValue, forumState.mainThemes);
    if (searchInputValue.length > 0) {
      props.setIsChatOpen(true);
    } else {
      props.setFoundQuestions(null);
      props.setIsChatOpen(false);
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
        <h2 className={classes.headerTitle}>Forum</h2>
      </div>
    </div>
  );
}
