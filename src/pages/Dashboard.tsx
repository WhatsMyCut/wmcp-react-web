import React, { Component } from 'react';
import clsx from 'clsx';
import { AppLayout, AvatarCard } from '../common/components/';
import * as data from '../app.json';
import styled from 'styled-components';
import {
  palette,
  PaletteProps,
  spacing,
  SpacingProps,
  typography,
  TypographyProps,
} from '@mui/system';
import { Header, Expander } from '../sections/';
import { Grid,  } from '@mui/material';

const Box = styled.div<
  PaletteProps & SpacingProps & TypographyProps
>`${palette}${spacing}${typography}`;

export interface IProps {
}
export interface IState {
}
export default class Dashboard extends Component<IProps,IState> {
  state: IState;
  constructor(props: IProps, state: IState) {
    super(props)
    this.state = state;
    console.log('Dashboard', props, data)
  }

  render() {
    const open = true;
    //const { user : { name, email }, logged } = this.props.params;
    return (
      <AppLayout>
        <Box
          id={'wmcp-com'}
          color="primary.main"
          bgcolor="background.paper"
          fontFamily="Oswald"
          fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
          p={{ xs: 2, sm: 3, md: 4 }}
          marginX="0"
        >
          <Header />
          <Grid container className={'maincontainer'}>
            <Grid container direction="row" justifyContent="center">
              <Grid item xs={3}>
                <AvatarCard />
              </Grid>
              <Grid item xs={9}>
                <Expander />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </AppLayout>
    );
  }
}
