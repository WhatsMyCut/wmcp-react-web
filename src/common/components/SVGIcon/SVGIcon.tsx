import React from 'react';
import SVG from 'react-inlinesvg';
import { Typography, CardMedia } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    body1: {
      fontFamily: 'cursive',
    },
  })
);

const SVGIcon = ({iconName, ...props}: any) => {
  const { file, alt } = iconName;
  let tag: any;
  if (RegExp('.png$|.jpg$|.gif$').test(file)) {
    tag = (
      <CardMedia image={file} className={'icon clearfix'} title={alt} {...props} />
    )
  } else {
    tag = (
      <SVG src={file} className={['icon', file]} title={alt} {...props} />
    )
  }
  return (
    <div className={'iconContainer'}>
      <div className={'iconDiv'}>{ tag }</div>
      <div className={'iconText'}><Typography component='p' className={styles.body1}>{alt}</Typography></div>
    </div>
  );
}

export default SVGIcon;
