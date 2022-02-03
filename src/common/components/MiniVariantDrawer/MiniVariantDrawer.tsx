import React, { Component, useState } from 'react';
import clsx from 'clsx';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import useStyles from './MiniVariantDrawer.styles';

export interface IProps {
  children?: any;
}
export interface IState {
  open: false;
}

export default class MiniVariantDrawer extends Component<IProps, IState> {
  classes: any;
  constructor(props:IProps, state: IState) {
    super(props)
    this.classes = useStyles(props);
  }

  private setOpen(bool) {
    this.setState({ open: bool});
  }

  private handleDrawerOpen() {
    this.setOpen(true);
  }

  private handleDrawerClose() {
    this.setOpen(false);
  }

  render() {
    const { open } = this.state;
    return (
      <div className={this.classes.root}>
        <AppBar
          position="relative"
          className={clsx('appBar', {
            //[this.UNSAFE_componentWillReceivePropsclasses.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx('menuButton', {
                ['hide']: open,
              })}
              size="large">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Mini variant drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          className={clsx(this.classes.drawer, {
            ['drawerOpen']: open,
            ['drawerClose']: !open,
          })}
          classes={{
            paper: clsx({
              ['drawerOpen']: open,
              ['drawerClose']: !open,
            }),
          }}
          open={open}
        >
          <div className={'toolbar'}>
            <IconButton onClick={this.handleDrawerClose} size="large">
              <ChevronRightIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={this.classes.content}>
          <div className={this.classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}
