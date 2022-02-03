import BaseCard from './BaseCard'
import { Container } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import php from '../../../images/php.png';
export default function PHPCard() {
  return (
    <BaseCard
      iconInfo={{file: php, alt: 'PHP'}}
      title="PHP"
      subheader="Starting: 1994"
      descriptionText={
        <Typography variant="body2" color="textSecondary" component="p">
          PHP: Hypertext Preprocessor is a general-purpose programming language originally designed for web development. It was originally created by Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group.
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
