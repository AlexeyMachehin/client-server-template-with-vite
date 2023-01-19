import { FormEvent, useState } from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import DashBoard from './dashBoard/DashBoard';
import { IForumState } from '../../../../service/types/forumPage/IForumState';
import { IQuestion } from '../../../../service/types/forumPage/IQuestion';
import { forumState } from '../../../mockData/forumState';
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

export default function Header() {
  const [mainTheme, setMainTheme] = useState<string | null>(null);
  const [foundQuestions, setFoundQuestions] = useState<IQuestion[]>([]);

  const searchQuestion = (
    inputValue: string,
    mainThemes: IForumState
  ): IQuestion[] => {
    const foundQuestionsArray: IQuestion[] = [];
    for (const mainTheme in mainThemes) {
      mainThemes[mainTheme].forEach((question: IQuestion) => {
        const regExp = new RegExp(`${inputValue.toLowerCase()}`);
        const value = question.title.toLowerCase();
        if (regExp.test(value)) {
          setMainTheme(mainTheme);
          foundQuestionsArray.push(question);
        }
      });
    }
    return foundQuestionsArray;
  };

  const handleOnChangeInput = (event: FormEvent<HTMLInputElement>) => {
    const searchInputValue = (event.target as HTMLInputElement).value;
    const foundQuestions =
      searchInputValue !== ''
        ? searchQuestion(searchInputValue, forumState)
        : [];
    setFoundQuestions(foundQuestions);
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
          placeholder="Find a question"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      {foundQuestions.length && (
        <DashBoard foundQuestions={foundQuestions} mainTheme={mainTheme} />
      )}

      <div className={classes.titleWrapper}>
        <Typography variant="h6" className={classes.headerTitle}>
          Forum
        </Typography>
      </div>
    </div>
  );
}
