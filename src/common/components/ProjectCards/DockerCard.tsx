import BaseCard from './BaseCard'
import { Container } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import docker from '../../../images/docker.png';
export default function DjangoCard() {
  return (
    <BaseCard
      iconInfo={{file: docker, alt: 'Docker'}}
      title="Docker"
      subheader="Starting: 2015"
      descriptionText={
        <Typography variant="body2" color="textSecondary" component="p">
          Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files.
        </Typography>
      }
      buttonText=""
      cardBack={
        <Container className="cardBack">
          <Typography variant="body2" color="textSecondary" component="p">
            I began working with Docker in 2015 while at Havas Worldwide.
          </Typography>
        </Container>
      }
    />
  )
}
