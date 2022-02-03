import { Container, Grid } from '@mui/material';

import BaseCard from './BaseCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Typography from '@mui/material/Typography';
import reactnative from '../../../images/reactnative.png';
export default function ReactNativeCard() {
  return (
    <BaseCard
      iconInfo={{file: reactnative, alt: 'React Native'}}
      title="React Native"
      subheader="React-Based Cross-Platform Library for iOS and Android Mobile Apps"
      descriptionText={
        <Typography variant="body2" color="textSecondary" component="p">
          React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities. Furthermore, an incomplete port for Qt also exists.
        </Typography>
      }
      buttonText=""
      cardBack={
        <Container className="cardBack">
          <Typography component="div" variant="subtitle1">My Background with React Native</Typography>
          <Typography component="p" variant="body2" color="textSecondary">
            I began using React Native professionally in 2018 as a natural progression from React and Redux web development.
            Professionally, I have used them throughout all of my contracts in 2019.
          </Typography>
          <Typography component="div" variant="subtitle2">Code Samples</Typography>
          <Grid container direction="column">
            <Grid item component="div">
              <Typography component="p" variant="body1" color="textSecondary">
                <FontAwesomeIcon icon={["fab", "github"]} className="icon small" />
                <a href="https://github.com/WhatsMyCut/crna-trivia-game" target="_blank">CRNA Trivia Game</a>
              </Typography>
              <Typography component="p" variant="body2" color="textSecondary">
                A simple "Create React Native App" (CRNA) triva game application using a public trivia API.
              </Typography>
            </Grid>
            <Grid item component="div">
              <Typography component="p" variant="body1" color="textSecondary">
                <FontAwesomeIcon icon={["fab", "github"]} className="icon small" />
                <a href="https://github.com/WhatsMyCut/earth-guardians" target="_blank">EarthTracker.app</a>
              </Typography>
              <Typography component="p" variant="body2" color="textSecondary">
                My contributions to the EarthTracker.app from EarthGuardians.org
              </Typography>
            </Grid>
          </Grid>
        </Container>
      }
    />
  )
}
