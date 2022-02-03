import React, { Component } from 'react';
import { Avatar, Card, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import About from './About';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    }
  })
);

export interface IProps {
}
export interface IState {
}
const AvatarCard = ({props}: any) => {
  const classes = useStyles(props);

  return (
    <Card className={'avatarCard'}>
      <Avatar src={'/public/images/profile_pic2017.jpg'} className={'avatar'} />
      <About />
    </Card>

  )
}
export default AvatarCard;
