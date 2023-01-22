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
import { QuestionWithTopic } from '../../../../service/types/forumPage/questionWithTopic';

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
  const [foundedQuestions, setFoundedQuestions] = useState<QuestionWithTopic[]>(
    []
  );

  const searchQuestions = (
    inputValue: string,
    mainThemes: IForumState
  ): QuestionWithTopic[] => {
    const foundQuestionsArray: QuestionWithTopic[] = [];
    for (const mainTopic in mainThemes) {
      mainThemes[mainTopic].forEach((question: IQuestion) => {
        const regExp = new RegExp(`${inputValue.toLowerCase()}`);
        const value = question.title.toLowerCase();
        if (regExp.test(value)) {
          foundQuestionsArray.push({ ...question, topic: mainTopic });
        }
      });
    }
    return foundQuestionsArray;
  };

  const handleOnChangeInput = (event: FormEvent<HTMLInputElement>) => {
    const searchInputValue = (event.target as HTMLInputElement).value;
    const foundedQuestions =
      searchInputValue !== ''
        ? searchQuestions(searchInputValue, forumState)
        : [];
    setFoundedQuestions(foundedQuestions);
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
      {foundedQuestions.length && (
        <DashBoard foundedQuestions={foundedQuestions} />
      )}

      <div className={classes.titleWrapper}>
        <Typography variant="h6" className={classes.headerTitle}>
          Forum
        </Typography>
      </div>
    </div>
  );
}
