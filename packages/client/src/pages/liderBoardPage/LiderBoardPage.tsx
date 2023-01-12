import styles from './LiderBoardPage.module.css';

import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const liders = [
  {
    id: 1,
    name: 'Иван Петров',
    rating: 1235,
    avatar: 'https://placekitten.com/100',
  },
  {
    id: 2,
    name: 'Петр Иванов',
    rating: 1135,
    avatar: 'https://placekitten.com/100',
  },
  {
    id: 3,
    name: 'Арсений Сидоров',
    rating: 235,
  },
  {
    id: 4,
    name: 'Вениамин Скачков',
    rating: 135,
    avatar: 'https://placekitten.com/100',
  },
];

const Colors = ['gold', 'silver', 'goldenrod', 'tan'];

const getIcon = (index: number) => {
  const bestLidersCount = 3;
  return index < bestLidersCount ? (
    <EmojiEventsIcon fontSize="large" />
  ) : (
    <StarBorderIcon fontSize="medium" />
  );
};

const getColor = (index: number) => {
  return Colors[index] ?? Colors[-1];
};

const LiderBoardPage = () => {
  return (
    <div className={styles.liderBoard}>
      <Container maxWidth="lg">
        <h1 className={styles.title}>LiderboardPage</h1>
        <List>
          {liders.map((lider, index) => (
            <ListItem key={lider.id} className={styles.listItem}>
              <ListItemAvatar>
                <Avatar src={lider.avatar} alt={lider.name}>
                  <AccountCircleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>{lider.name}</ListItemText>
              <ListItemText sx={{marginLeft: 'auto', flexGrow: '0'}}>
                <Typography
                  display="flex"
                  alignItems="center"
                  color={getColor(index)}>
                  {lider.rating}
                  {getIcon(index)}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default LiderBoardPage;
