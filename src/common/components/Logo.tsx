import React, { Component } from 'react';
import { Avatar } from '@mui/material';
import logo from '../../images/logo.png';

export interface IProps {
}
export interface IState {
}
export default class Logo extends Component<IProps,IState> {
  constructor(props: IProps, state: IState) {
    super(props)
  }

  componentDidUpdate(state: IState) {
    this.setState(state);
  }

  render() {
    return (
      <Avatar src={logo} className={'logo'} alt={"What's My Cut? Productions"} />
    )
  }
}
