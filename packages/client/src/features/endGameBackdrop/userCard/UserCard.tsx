import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import classes from './userCard.module.css';

export default function UserCard(props: any) {
  return (
    <Card className={classes.userCard}>
      <CardMedia
        className={classes.userCardAvatar}
        image={props.user.avatarURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Score: {props.user.score}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Time: {props.user.time}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Kills: {props.user.kills}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Damage: {props.user.damage}
        </Typography>
      </CardContent>
    </Card>
  );
}
