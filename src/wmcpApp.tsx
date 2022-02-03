import React, { Component, Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Router, Routes, Route, Navigate } from 'react-router-dom';
import history from './common/utils/history';
import { ScrollDetector } from './common/components/';
import NoSsr from '@mui/material/NoSsr';
import { Dashboard } from './pages/';

library.add(fab, fas);

export interface IProps {
  params?: any,
}

export interface IState {
  location?: any,
}
export default class WMCPApp extends Component<IProps,IState> {
  state: IState;
  constructor(props: IProps, state: IState) {
    super(props)
    this.state = state;
    console.log('WMCPApp', this);
  }

  render() {
    return (
      <Fragment>
      <Router location={history.location} navigator={history}>
        <ScrollDetector location={history.location}>
          <NoSsr>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
            </Routes>
          </NoSsr>
        </ScrollDetector>
      </Router>
      </Fragment>
    );
  }
}
