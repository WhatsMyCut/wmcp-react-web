import React from 'react';
import { Typography, Container, Paper } from '@mui/material';
import {
  ApacheSparkCard,
  ReactNativeCard,
  ReactReduxCard,
  PythonCard,
  DjangoCard,
  AngularCard,
  FlaskCard,
  PHPCard,
  DockerCard,
  DatabaseCard,
 } from '../ProjectCards/index';
 export default function CardGrid () {
  return (
    <div className="gridContainer">
      <Typography component='div' className={'bodyText wide'}>
        Scroll for more.
      </Typography>
      <Paper className="gridList">
        <Paper className="gridItem" style={{height: (100% - 25)}}>
          <ReactReduxCard />
        </Paper>
        <Paper className="gridItem">
          <ReactNativeCard />
        </Paper>
        <Paper className="gridItem">
          <PythonCard />
        </Paper>
        <Paper className="gridItem">
          <DjangoCard />
        </Paper>
        <Paper className="gridItem">
          <AngularCard />
        </Paper>
        <Paper className="gridItem">
          <FlaskCard />
        </Paper>
        <Paper className="gridItem">
          <PHPCard />
        </Paper>
        <Paper className="gridItem">
          <DockerCard />
        </Paper>
        <Paper className="gridItem">
          <DatabaseCard />
        </Paper>
      </Paper>
    </div>
  )
}
