import React, { Component } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Logo } from '../common/components';

export interface IProps {
}
export interface IState {
}
export default class Header extends Component<IProps,IState> {
  constructor(props: IProps, state: IState) {
    super(props)
  }

  componentDidUpdate(state: IState) {
    this.setState(state);
  }

  render() {
    return (
      <Box className="clearfix">
        <Grid container>
          <Grid item xs={2}>
            <Logo />
          </Grid>
          <Grid item>
            <Typography component="h1" variant="h3" className={'site-title'} gutterBottom>
              What's My Cut Productions, LLC
            </Typography>
            <Typography component="h2" variant="subtitle1" className={'site-sub'} gutterBottom>
              Portfolio Site for Mike Taylor, Web Developer
            </Typography>
          </Grid>
        </Grid>
      </Box>
    )
  }
}
