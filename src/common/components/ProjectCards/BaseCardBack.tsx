import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Container,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails
} from '@mui/material';
import UnfoldMore from '@mui/icons-material/UnfoldMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
  base:{
    root: {
      fontSize: 11,
      fontFamily: 'Oswald',
      boxShadow: 'none',
      padding: 0,
    }
  },
  summaryRoot: {
    root: {
      display: 'flex',
      fontSize: 12,
      fontFamily: 'Oswald',
      boxShadow: 'none',
      padding: 0,
    },
  },
  detailRoot: {
    root: {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
    }
  },
  title: {
    width: '100%',
    fontWeight: "bold",
    fontSize: 14,
    wordBreak: 'keep-all',
  },
  subtitle: {
    flex: '1 1 100%',
    fontSize: 11,
  }
});

export interface IProps {
  panels?: ItemProps[];
}

export interface ItemProps {
  details?: JSX.Element;
  subtitle?: string;
  title?: string;
  urls?: URLProps[]
}

export interface URLProps {
  icon?: any;
  url: string;
  display?: string;
  description?: string;
}

const urlsJSX = (urls)  => {
  return Object.values(urls).map((item:URLProps, index: number) => {
    return (
      <div key={index}>
        <Typography component="p" variant="body1" color="textPrimary">
          <FontAwesomeIcon icon={item.icon} className="icon small" />
          <a href={item.url} target="_blank">{item.display}</a>
        </Typography>
        <Typography component="p" variant="body2" color="textSecondary">
          {item.description}
        </Typography>
      </div>
    )
  })
}

const panelJSX = (panels, expanded, handleChange, classes) => {
 return Object.values(panels).map((item:ItemProps, key:number) => {
  const panelName = 'panel' + key;
  const urlJSX = (item.urls) ? urlsJSX(item.urls) : '';
  return (
    <Accordion key={key}
      expanded={expanded === panelName}
      onClick={handleChange(panelName)}
      className={classes.base}
    >
      <AccordionSummary
        expandIcon={<UnfoldMore />}
        aria-controls={"panel" + key + "bh-content"}
        id={"panel" + key + "bh-header"}
        style={classes.summaryRoot.root}
      >
        <div className={classes.title}>{item.title}</div>
        { item.subtitle &&
          <div className={classes.subtitle}><br/>{item.subtitle}</div>
        }
      </AccordionSummary>
      <AccordionDetails className={classes.detailRoot}>
        { item.details }
        {urlJSX}
      </AccordionDetails>
    </Accordion>
  )
  });
}
export default function BaseCardBack(props:IProps) {
  const [expanded, setExpanded] = React.useState('panel0');
  let classes = useStyles(props);
  const { panels } = props;
  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    event.stopPropagation()
    const set = (panel === expanded) ? '' : panel;
    return setExpanded(set);
  };

  const content =  panelJSX(panels, expanded, handleChange, classes);
  return (
    <div className="cardBack" key={Number.parseInt(props.panels[0].title)}>
    { content }
    </div>
  )
}
