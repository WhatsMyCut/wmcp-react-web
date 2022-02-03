import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, IconButton } from '@mui/material';
import Flip from '@mui/icons-material/Flip';
import { SVGIcon } from '../SVGIcon';

const useStyles = makeStyles({
  base: {
    position: 'relative',
    display: 'flex',
    flex: '1 1 auto',
    minHeight: '350px',
  },
  card: {
    flex: 1,
    transition: 'transform',
    transitionDuration: '1s',
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    marginRight: 15,
  },
  cardBack: {
    transform: 'rotateY(180deg)',
  },
  root: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Oswald',
    verticalAlign: 'top',
  },
  media: {
    height: 140,
  },
  description: {
    backgroundColor: '#efefef',
    display: 'flex',
  },
  cardBackContainer: {
    padding: '0 !important',
    width: '100%',
  },
  avatar: {
    backgroundColor: '#fff',
    backgroundSize: 'contain',
  },
});

export interface IProps {
  iconInfo: any;
  title?: string;
  media?: {
    image?: string;
    title?: string;
  };
  cardBack?: any;
  cardBackContainer?: any;
  subheader?: any;
  descriptionText?: any;
  buttonText?: string;
}

export default function BaseCard(props:IProps) {
  let classes = useStyles(props);
  const [front, isFront] = React.useState(true);
  const {iconInfo, title, subheader, descriptionText, buttonText = "Learn More", media, cardBack} = props;
  const iInfo = (iconInfo.file) ? <SVGIcon iconName={iconInfo} className="jobIcon"/> : iconInfo

  const flipCard = () => {
    console.log('flipCard', classes.card);
    isFront(!front);
  }
  return (
    <div className={classes.base}>
      <Card className={clsx(classes.card, front && classes.cardBack)}>
        <CardHeader
          avatar={
            iInfo
          }
          action={
            <IconButton aria-label="Flip Card" onClick={flipCard} size="large">
              <Flip />
            </IconButton>
          }
          classes={{root: classes.root, title: classes.title}}
          title={title}
          subheader={subheader}
        />
        <CardContent className={classes.cardBackContainer}>
          {cardBack}
        </CardContent>
      </Card>
      <Card className={clsx(classes.card, !front && classes.cardBack)}>
        <CardHeader
          avatar={
            iInfo
          }
          action={
            <IconButton aria-label="Flip Card" onClick={flipCard} size="large">
              <Flip />
            </IconButton>
          }
          classes={{root: classes.root, title: classes.title}}
          title={title}
          subheader={subheader}
        />
        { media &&
          <CardMedia
            className={classes.media}
            image={media.image}
            title={media.title}
          />
        }
        <CardActionArea className={classes.description}>
          <CardContent>

            {descriptionText}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {buttonText}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
