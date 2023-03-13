import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import DashBoard from './dashBoard/DashBoard';
import { Button } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import classes from './header.module.css';
import { useAppSelector, useAppDispatch } from '../../../../utils/hooks';
import { findQuestions } from '@/store/forum/thunk';

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
  const navigate = useNavigate();

  const foundedQuestions = useAppSelector(
    state => state.forumReducer.foundedQuestions
  );

  const dispatch = useAppDispatch();

  const handleOnChangeInput = (event: FormEvent<HTMLInputElement>) => {
    const searchInputValue = (event.target as HTMLInputElement).value;
    dispatch(findQuestions(searchInputValue));
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
      <Button
        className={classes.startPageButton}
        onClick={() => navigate('/')}
        variant="outlined"
        startIcon={<FirstPageIcon />}>
        start page
      </Button>
    </div>
  );
}
