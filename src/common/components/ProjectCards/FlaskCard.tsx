import BaseCard from './BaseCard'
import { Container } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import flask from '../../../images/flask.png';
export default function FlaskCard() {
  return (
    <BaseCard
      iconInfo={{file: flask, alt: 'Flask'}}
      title="Flask"
      subheader="Starting: 2015"
      descriptionText={
        <Typography variant="body2" color="textSecondary" component="p">
          Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions.
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
