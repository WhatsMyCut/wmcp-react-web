import React, { Component } from 'react';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, Icon } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const classes = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
    },
    heading: {
      fontFamily: 'Oswald',
      fontSize: theme.typography.pxToRem(12),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontFamily: 'Oswald',
      fontSize: theme.typography.pxToRem(8),
      color: theme.palette.text.secondary,
      paddingTop: 5,
    },
    accordionHeader: {
      backgroundColor: '#ddd !important',
    },
  }),
);

export interface IProps {}
export interface IState {
  expanded?: string;
}


export default class About extends Component<IProps, IState> {
  state: any;
  classes: any;
  constructor(props: IProps) {
    super(props);
    this.state = { expanded: 'apanel1'};
    this.classes = classes.bind(this);

    // this.setExpanded = this.setExpanded.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  setExpanded(val:string) {
    this.setState({ expanded: val})
  }

  handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    const { expanded } = this.state;
    if (panel !== expanded) {
      this.setExpanded(isExpanded ? panel : 'apanel1');
    };
  };



  render() {
    const { expanded } = this.state;
    return (
      <div className={"about"}>
        <Accordion expanded={expanded === 'apanel1'} onChange={this.handleChange('apanel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="apanel1bh-content"
            id="apanel1bh-header"
            className={'aboutAccordionHeader'}
          >
            <Typography className={this.classes.heading}>Contact Me</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container alignContent="flex-start">
              <Grid item xs={12}>
                <FontAwesomeIcon icon="at" className={"faIcon"}/>
                <Typography component="span" variant="body1">
                  mike@whatsmycut.com
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FontAwesomeIcon icon="mobile" className={"faIcon"}/>
                <br/>
                <Typography component='span' variant="body1">415.407.4608</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption">
                  <FontAwesomeIcon icon={['fab', 'github-alt']} className={"faIcon"}/>
                  <br/>
                  <Typography component='span' variant="body1">github.com/WhatsMyCut</Typography>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption">
                  <FontAwesomeIcon icon={['fab', 'app-store-ios']} className={"faIcon"}/>
                  <br/>
                  <Typography component='span' variant="body1">`expo.io/@mtaylor769`</Typography>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FontAwesomeIcon icon={['fab','linkedin']} className={"faIcon"}/>
                <br/>
                <Typography component='span' variant="body1">linkedin.com/in/mtaylor769</Typography></Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'apanel2'} onChange={this.handleChange('apanel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="apanel2bh-content"
            id="apanel1bh-header"
            className={this.classes.accordionHeader}
          >
            <Typography className={this.classes.heading}>About This Site</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item xs={12}>
                <FontAwesomeIcon icon={['fab','wordpress']} className={"faIcon"}/>
                <Typography component='p' variant='body1'>
                  This site is hosted on <a href='http://getflywheel.com' target="_blank">Flywheel</a>,
                  a WordPress hosting site.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FontAwesomeIcon icon={['fab','react']} className={"faIcon"}/>
                <Typography component='p' variant='body1'>
                  Written with <a href="https://reactjs.org/" target="_blank" >React</a>.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FontAwesomeIcon icon={['fab', 'css3']} className={"faIcon"}/>
                <Typography component='p' variant='body1'>
                  UI Components: <br/><a href="https://material-ui.com/" target="_blank" >Material UI</a>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FontAwesomeIcon icon={['fab','github']} className={"faIcon"}/>
                <Typography component='p' variant='body1'>
                  The code repository is on <a href="https://github.com/whatsmycut/wmcp-php-app.git" target="_blank" >GitHub</a>.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FontAwesomeIcon icon={'database'} className={"faIcon"}/>
                <Typography component='p' variant='body1'>
                  Data hosted by Prisma.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FontAwesomeIcon icon={'keyboard'} className={"faIcon"}/>
                <Typography component='p' variant='body1'>
                  Written by me!
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}
