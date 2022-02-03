import BaseCard from './BaseCard'
import { Container } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import angular from '../../../images/angular.png';
export default function DjangoCard() {
  return (
    <BaseCard
      iconInfo={{file: angular, alt: 'Angular'}}
      title="Angular JS"
      subheader="Starting: 2015"
      descriptionText={
        <Typography variant="body2" color="textSecondary" component="p">
          AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.
        </Typography>
      }
      buttonText=""
      cardBack={
        <Container className="cardBack">
          <Typography variant="body2" color="textSecondary" component="p">
            Card Back
          </Typography>
        </Container>
      }
    />
  )
}
