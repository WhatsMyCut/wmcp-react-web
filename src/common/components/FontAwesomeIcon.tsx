import React from 'react';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'inline-block',
      margin: 0,
      fontSize: 'inherit',
      '& > .fa': {
        borderColor: '#ccc',
      },
    },
    iconHover: {
      margin: 0,
      '&:hover': {
        opacity: 0.5,
      },
    },
  }),
);

export default function FAIcon(iconName, variant, props) {
  const classes = useStyles(props);
  const { name } = iconName;
  const prefix = (variant === 'solid') ? 'fas' : (variant === 'black') ? 'fab' : 'fa';
  console.log('FAI', prefix, name, variant, iconName)
  return (
    <span className={classes.root}>
      <FontAwesomeIcon
        icon={[prefix, name]}
        {...props}
      />
    </span>
  );
}
