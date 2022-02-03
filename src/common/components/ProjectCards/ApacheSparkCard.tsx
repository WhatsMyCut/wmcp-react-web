import BaseCard from './BaseCard'
import { Container } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import spark from '../../../images/spark.png'
export default function ApacheSparkCard() {
  return (
    <BaseCard
      iconInfo={{file: spark, alt: 'Apache Spark'}}
      title="Apache Spark"
      subheader="Starting: June, 2019"
      descriptionText={
        <Typography variant="body2" color="textSecondary" component="p">
          Apache Spark is an open-source distributed general-purpose cluster-computing framework. Spark provides an interface for programming entire clusters with implicit data parallelism and fault tolerance.
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
  );
}
