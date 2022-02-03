import React from 'react';
import {useTheme, makeStyles } from '@mui/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Theme } from '@mui/material/styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Freelance Web Development Expert',
    imgPath:
      '/public/images/code-blurry-slide.jpg',
  },
  {
    label: 'An Extensive Career of Software Development',
    imgPath:
      '/public/images/venn_resume-v2.7-2017-slide.png',
  },
  {
    label: 'Over 30 Years of Experience',
    imgPath:
      '/public/images/mt_venn_resume2011.png',
  },
  {
    label: 'Secret Shopper and Field Auditor',
    imgPath:
      '/public/images/control_room.jpg',
  },
  {
    label: 'Owner and Operator of Calizota.com',
    imgPath:
      '/public/images/calizota-flag-fb-cover-851x315.png',
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    fontSize: 18,
    border: 0,
    height: 400,
    fontFamily: 'Oswald'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: '1px',
    backgroundColor: 'white',
  },
  img: {
    height: 300,
    display: 'block',
    width: '100%',
    overflow: 'hidden',
  },
}));

function SwipeableTextMobileStepper(props: any) {
  const classes = useStyles(props);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step: any) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Prev
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
