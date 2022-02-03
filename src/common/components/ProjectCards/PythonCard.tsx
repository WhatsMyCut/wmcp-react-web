import BaseCard from './BaseCard';
import BaseCardBack from './BaseCardBack';
import React from 'react';
import Typography from '@mui/material/Typography';
import python from '../../../images/python.png';

export default function PythonCard() {
  return (
    <BaseCard
      iconInfo={{file: python, alt: 'Python'}}
      title="Python1"
      subheader="Starting: 1994"
      descriptionText={
        <Typography variant="body2" color="textSecondary" component="p">
          Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace.
        </Typography>
      }
      buttonText=""
      cardBack={
        <BaseCardBack
          panels={[
            {
              title: "My Experience with Python",
              details: (
                <Typography component='p' variant='body1'>
                  I was first introduced to Python in the early 1990s as a text processor.
                  As Python has become the language of choice for modern APIs such as Flask and Django,
                  I have been using versions 2.7, and 3+.
                </Typography>
              )
            },
            {
              title: 'Code Samples',
              urls: [
                {
                  icon: ['fab', 'github'],
                  url: 'http://github.com/WhatsMyCut/ShoreGroup',
                  description: 'Shore Group React Redux Dashboard',
                  display: 'Shore Group'
                }
              ]
            },
            {
              title: 'Web URLs',
              details: (
                <Typography component='p' variant='subtitle1'>test 2</Typography>
              ),
              urls: [
                {
                  icon: "external-link-alt",
                  url: 'http://www.apple.com',
                  display: 'Apple, Inc'
                }
              ]
            }
          ]}
        />
      }
    />
  )
}
