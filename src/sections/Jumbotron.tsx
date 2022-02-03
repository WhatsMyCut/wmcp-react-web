import React, { Component } from 'react';
import { Paper } from '@mui/material';
import SwipeableTextMobileStepper from '../common/components/SwipeableTextMobileStepper';

export interface IProps {
}
export interface IState {
}
export default class Jumbotron extends Component<IProps,IState> {
  constructor(props: IProps, state: IState) {
    super(props)
  }

  componentDidUpdate(state: IState) {
    //this.setState(state);
  }

  render() {
    return (
      <Paper className={'jumbotron'}>
        <SwipeableTextMobileStepper />
        <div className={'overlay'} />
      </Paper>
    )
  }
}


