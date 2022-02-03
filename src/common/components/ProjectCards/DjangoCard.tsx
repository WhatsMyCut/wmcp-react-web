import BaseCard from './BaseCard'
import { Container } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import django from '../../../images/django.png';
export default function DjangoCard() {
  return (
    <BaseCard
      iconInfo={{file: django, alt: 'Django'}}
      title="Django"
      subheader="Starting: 2015"
      descriptionText={
        <Typography variant="body2" color="textSecondary" component="p">
          Django is a Python-based free and open-source web framework, which follows the model-template-view architectural pattern. Django's primary goal is to ease the creation of complex, database-driven websites.
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
