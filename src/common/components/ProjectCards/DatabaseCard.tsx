import { Container, CircularProgress as Spinner } from '@mui/material';

import BaseCard from './BaseCard'
import React from 'react';
import { SVGIcon } from '../SVGIcon';
import Typography from '@mui/material/Typography';
import database from '../../../images/sql.png';
import elasticsearch from '../../../images/elasticsearch.svg';
import existdb from '../../../images/existdb.png';
import graphql from '../../../images/graphql.svg';
import mongodb from '../../../images/mongodb.svg';
import mysql from '../../../images/mysql.svg';
import oracle from '../../../images/oracle.svg';
import postgresql from '../../../images/postgresql.svg';
const loading = <Spinner size='sm' variant='determinate'/>;
export const getIcons = (filteredIcons: any) => {
  return Object.values(filteredIcons).map((icon, value) => {
    return (
      <SVGIcon key={value} iconName={icon} className={'icon'} loader={loading} />
    )
  })
}
export const icons = {
  "mongodb": {
    "file": mongodb,
    "alt": 'Mongo DB',
    "categories": [ 'database', 'nosql', ],
  },
  "mysql": {
    "file": mysql,
    "alt": 'MySQL',
    "categories": [ 'database', 'sql', 'mysql' ],
  },
  "oracle": {
    "file": oracle,
    "alt": 'Oracle',
    "categories": [ 'database', 'sql', 'mysql' ],
  },
  "postgresql": {
    "file": postgresql,
    "alt": 'PostgresQL',
    "categories": [ 'database', 'sql', 'plsql' ],
  },
  "graphql": {
    "file": graphql,
    "alt": 'GraphQL',
    "categories": [ 'database', 'sql', 'graphql' ],
  },
  "elasticsearch": {
    "file": elasticsearch,
    "alt": 'Elasticsearch',
    "categories": [ 'database', 'nosql', 'elasticsearch' ],
  },
  "existdb": {
    "file": existdb,
    "alt": 'ExistDB',
    "categories": [ 'database', 'xml', 'sql' ],
  },
}
export default function DatabaseCard () {
  const iconsJSX = getIcons(icons);
  return (
    <BaseCard
      iconInfo={iconsJSX}
      title="Databases"
      subheader="Starting: 1994"
      descriptionText={
        <Typography variant="body2" color="textSecondary" component="p">
          SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.
          <br/>
          A NoSQL database provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases.
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
