import React from 'react';
import BaseCard from './BaseCard'
import reactredux from '../../../images/reactredux.png';
import { Typography, Container, Grid } from '@mui/material/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { concat } from 'apollo-link';
export default function ReactReduxCard() {
  return (
    <BaseCard
      iconInfo={{file: reactredux, alt: 'React & Redux'}}
      title="React &amp; Redux"
      subheader={
        <div>
          Front-End UI Component Library / State Manager Library
        </div>
      }
      descriptionText={
        <div className="introText">
          <Typography variant="body2" color="textSecondary" component="p">
            React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary" component="p">
            Redux is a state management tool. While it's mostly used with React, it can be used with any other JavaScript framework or library. ... With Redux, the state of your application is kept in a store and each component can access any state that it needs from this store.
          </Typography>
        </div>
      }
      buttonText=""
      cardBack={
        <Container className="cardBack">
          <Typography component="div" variant="subtitle1">My Background with React &amp; Redux</Typography>
          <Typography component="p" variant="body2" color="textSecondary">
            I began using React and Redux professionally in 2015 as a natural transition from BackboneJS and EmberJS in the MVC era before React and Angular became the current widely-used technologies.
            Professionally, I have used them since my time at Robert Half Professional Services in Minneapolis, MN, that same year.
          </Typography>
          <Typography component="div" variant="subtitle2">Code Samples</Typography>
          <Grid container direction="column">
            <Grid item component="div">
              <Typography component="p" variant="body1" color="textSecondary">
                <FontAwesomeIcon icon={["fab", "github"]} className="icon small" />
                <a href="https://github.com/WhatsMyCut/wmcp-php-react-web" target="_blank">wmcp-php-react-web</a>
              </Typography>
              <Typography component="p" variant="body2" color="textSecondary">
                This website.
              </Typography>
            </Grid>
            <Grid item component="div">
              <Typography component="p" variant="body1" color="textSecondary">
                <FontAwesomeIcon icon={["fab", "github"]} className="icon small" />
                <a href="https://github.com/WhatsMyCut/ShoreGroup.git" target="_blank">ShoreGroup</a>
              </Typography>
              <Typography component="p" variant="body2" color="textSecondary">
                Navigation Dashboard Skeleton
              </Typography>
            </Grid>
          </Grid>
        </Container>
      }
    />
  )
}
