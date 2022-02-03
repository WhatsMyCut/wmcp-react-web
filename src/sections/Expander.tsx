import React, { Component } from 'react';
import {
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DevLogos, JobList } from '../common/components/index';
import Jumbotron from './Jumbotron';

import ErrorBoundary from '@components/ErrorBoundary';
import TinyMCE from '@components/SVGIcon/TinyMCE';
import {
  ApacheSparkCard,
  CardGrid,
 } from '../common/components/ProjectCards';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      width: 'auto',
    },
    heading: {
      fontFamily: 'Paytone One',
      fontSize: theme.typography.pxToRem(22),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontFamily: 'Raleway',
      fontSize: theme.typography.pxToRem(16),
      color: theme.palette.text.secondary,
      paddingTop: 5,
    },
    accordionHeader: {
      backgroundColor: 'beige',
    },
  }),
);

export interface IState {
  expanded?: string
}
export default class Expander extends Component<{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = { expanded: 'panel1' }
  }

  handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    // event.stopPropagation()
    const set = panel === this.state.expanded ? '' : panel
    this.setState({expanded: set})
  };

  render() {
    const { expanded } = this.state
    return (
      <div className={'expander'}>
        <Accordion expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            style={{ backgroundColor: '#efefef',}}
          >
            <Typography className={'accordionHeading'}>Specialties</Typography>
            <Typography className={'accordionSecondaryHeading'}>Current Development Focus</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CardGrid />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            style={{ backgroundColor: '#eee',}}
          >
            <Typography className={'accordionHeading'}>Skills</Typography>
            <Typography className={'accordionSecondaryHeading'}>
              Languages and Technologies
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DevLogos />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            style={{ backgroundColor: '#efefef',}}
          >
            <Typography className={'accordionHeading'}>About Me</Typography>
            <Typography className={'accordionSecondaryHeading'}>Career Summary</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container direction="row">
              <Grid item>
                <Typography paragraph className={'introText'}>San Francisco Bay Area UI/UX and Web Software Developer for 29+ years in industries including Legal, Finance, Retail, Software, eCommerce and Local Government. In addition to traditional UI languages, my career focus is currently React, React Native (Moblie), Python, GraphQL, Apache Spark, TDD/BDD full-stack Agile development, container-based cloud microservices, and Big Data analysis &amp; reporting. I am most comfortable in a role that bridges the gap between front-end and back-end developers, and can convey technical ideas to non-technical team members and stakeholders.</Typography>
              </Grid>
              <Grid item>
                <Jumbotron/>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            style={{ backgroundColor: '#efefef',}}
          >
            <Typography className={'accordionHeading'}>Work History</Typography>
            <Typography className={'accordionSecondaryHeading'}>
              Places I Have Worked
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item xs={12}>
                <JobList />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
            style={{ backgroundColor: '#eee',}}
          >
            <Typography className={'accordionHeading'}>Acheivements &amp; Awards</Typography>
            <Typography className={'accordionSecondaryHeading'}>
              Industry Recognition
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item xs={12}>
                <Card>
                  <CardHeader>
                    <Typography component='div' variant='h4'>
                      Steve Jobs 2011 WWDC Keynote
                    </Typography>
                  </CardHeader>
                  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/zHZf9wr2Ak8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardHeader>
                    <Typography component='div' variant='h4'>
                      Duke 2000 (Protozoa)
                    </Typography>
                  </CardHeader>
                  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/po1HWQQd-qo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardHeader>
                    <Typography component='div' variant='h4'>
                      Siggraph 1994 (Forensic Technologies Int'l)
                    </Typography>
                  </CardHeader>
                  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/kpEbhdFkifo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Card>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
            style={{ backgroundColor: '#eee',}}
          >
            <Typography className={'accordionHeading'}>Continued Study</Typography>
            <Typography className={'accordionSecondaryHeading'}>
              Technologies Under Current Research
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item xs={6}>
                <ApacheSparkCard />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
            style={{ backgroundColor: '#efefef',}}
          >
            <Typography className={'accordionHeading'}>Hobbies and Interests</Typography>
            <Typography className={'accordionSecondaryHeading'}>
              Things I Do
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
              vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}
