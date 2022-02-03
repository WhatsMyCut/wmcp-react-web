import React, { Component } from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import {
  List,
  Grid,
  Divider,
  Typography,
  CircularProgress as Spinner
} from '@mui/material';
import { SVGIcon } from '../SVGIcon';

import { jobs } from './jobs';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: 0,
      margin: 0,
      paddingBottom: 15,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
      paddingRight: 20,
    },
    icon: {
      width: '25%',
      maxWidth: 140,
      flexDirection: 'row',
    },
    content: {
      width: '75%',
      flexDirection: 'row',
    }
  }),
);

const renderJob = (job: any, key: any, classes: any) => {
  const loading = <Spinner size='sm' variant='determinate'/>;

  const { file, company, title, startDate, endDate, description } = job
  return (
    <div key={key}>
      <Grid container className={classes.root}>
        <Grid item className={classes.icon}>
          <SVGIcon iconName={{'file': file, 'alt': company}} className={'jobIcon'} loader={loading} />
          <Typography
            component="div"
            variant="body2"
            color="textSecondary"
          >{startDate + " - " + endDate}</Typography>
        </Grid>
        <Grid item className={classes.content}>
          <Typography
            component="div"
            variant="h6"
            color="textPrimary"
          >{title}</Typography>
          <Typography paragraph
            variant="body2"
          >{description}</Typography>
        </Grid>
        <Divider variant="fullWidth" component="span" />
      </Grid>
    </div>
  )
}

const JobList = (props: any) => {
  const classes = useStyles(props);

  const jobList = Object.values(jobs).map((item, key) => {
    return renderJob(item, key, classes)
  })
  return (
    <div>
      <Typography paragraph className={'bodyText'}>A list of Employers and Contracts over the course of my career.</Typography>
      <List className={classes.root}>
        { jobList }
      </List>
    </div>
  )
}

export default JobList
