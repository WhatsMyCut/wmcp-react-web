import React, { Component } from 'react';
import { CircularProgress as Spinner, Box, Container, CssBaseline } from '@mui/material';

export interface IProps {
  isLoading?: boolean;
}
export interface IState {
  isLoading: true;
}
export default class AppLayout extends Component<IProps,IState> {
  constructor(props: IProps, state: IState) {
    super(props)
    this.state = state;
  }

  componentDidMount() {
    this.setState({isLoading: false});
  }

  render() {
    const year = new Date().getFullYear();
    if (this.state.isLoading) {
      return (
        <Box className={'wmcp-app-loading'} {...this.props} >
          <Spinner />
        </Box>
      );
    }
    return (
      <Box className={'wmcp-app'} {...this.props} >
        <CssBaseline />
        <Container className={'wmcp-app-content'}>
          {this.props.children}
        </Container>
        <footer>&copy; { year } What's My Cut? Productions</footer>

      </Box>
    )
  }
}
