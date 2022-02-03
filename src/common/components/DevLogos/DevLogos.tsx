import React, { Component } from 'react';
import { CircularProgress as Spinner, Box, AppBar, Tabs, Tab, Typography } from '@mui/material';
import { SVGIcon } from '../SVGIcon';
import { icons } from './icons'
import { filter } from 'minimatch';

export interface IProps {
  children?: any;
}
export interface IState {
  value: number;
}

export const ALL_SKILLS = 0;
export const LANGUAGE = 1;
export const FRONT_END = 2;
export const BACK_END = 3;
export const MOBILE = 4;
export const DEVOPS = 5;
export const DATABASES = 6;
export const TDD = 7;
export const ANALYTICS = 8;
export const LEGACY = 9;

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function valueProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default class DevLogos extends Component<IProps,IState> {
  constructor(props: IProps, state: IState) {
    super(props)
    this.state = { value: 0 }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    this.setState({value: newValue});
  }

  renderIcons( value: number = 0 ) {
    const loading = <Spinner size='sm' variant='determinate'/>
    let filteredIcons;
    switch (value) {
      case FRONT_END:
        filteredIcons = Object.values(icons).filter((item) => {
          const icon = item.categories;
          return icon.includes('web') || icon.includes('ui')
        });
        break;
      case BACK_END:
        filteredIcons = Object.values(icons).filter((item) => {
          const icon = item.categories;
          return icon.includes('api') || icon.includes('cli')
        });
        break;
      case MOBILE:
        filteredIcons = Object.values(icons).filter((item) => {
          const icon = item.categories;
          return icon.includes('mobile')
        });
        break;
      case DEVOPS:
        filteredIcons = Object.values(icons).filter((item) => {
          const icon = item.categories;
          return icon.includes('deploy')
        });
        break;
      case DATABASES:
        filteredIcons = Object.values(icons).filter((item) => {
          const icon = item.categories;
          return icon.includes('database')
        });
        break;
      case TDD:
        filteredIcons = Object.values(icons).filter((item) => {
          const icon = item.categories;
          return icon.includes('tdd')
        });
        break;
      case ANALYTICS:
        filteredIcons = Object.values(icons).filter((item) => {
          const icon = item.categories;
          return icon.includes('analytics') || icon.includes('reporting')
        });
        break;
      case LEGACY:
        filteredIcons = Object.values(icons).filter((item) => {
          const icon = item.categories;
          return icon.includes('legacy')
        });
        break;
      case LANGUAGE:
        filteredIcons = Object.values(icons).filter((item) => {
          const icon = item.categories;
          return icon.includes('language')
        });
        break;
      default:
        filteredIcons = Object.values(icons);
        break;
    }
    // console.log('filteredIcons', filteredIcons);

    return Object.values(filteredIcons).map((icon, value) => {
      return (
        <SVGIcon key={value} iconName={icon} className={'icon'} loader={loading} />
      )
    })

  }

  render() {
    const { value } = this.state;
    const filteredIcons = this.renderIcons(value);
    return (
        <div className={'clearfix'} style={{maxWidth: '100%', width: '-webkit-fill-available',}}>
          <Typography component={'h3'} className={'bodyText'}>
            An alphabetical list of languages, software packages, and technologies used over my career.
            <br/>
            Click tabs to filter by category.
          </Typography>
          <AppBar position="relative"  color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              variant="scrollable"
              indicatorColor="primary"
              textColor="inherit"
              scrollButtons="auto"
              aria-label="My Skill Set"
            >
              <Tab label="All Skills" {...valueProps(0)} />
              <Tab label="Core Languages" {...valueProps(1)} />
              <Tab label="Front-End" {...valueProps(2)} />
              <Tab label="Back-End" {...valueProps(3)} />
              <Tab label="Mobile" {...valueProps(4)} />
              <Tab label="DevOps" {...valueProps(5)} />
              <Tab label="Databases" {...valueProps(6)} />
              <Tab label="Testing" {...valueProps(7)} />
              <Tab label="Analytics" {...valueProps(8)} />
              <Tab label="Legacy" {...valueProps(9)} />
            </Tabs>
          </AppBar>
          <TabPanel value={0} index={0} styles={{margin:0, maxHeight: 300, overflow: 'auto',}}>
              { filteredIcons }
          </TabPanel>
      </div>
    )
  }
}
