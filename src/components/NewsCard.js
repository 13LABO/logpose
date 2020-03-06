import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
    '&:hover': {
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
      
    },
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const NewsCard = (props) => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} variant="outlined" style={{"margin":"1em 0px"}} >
      <div style={{"display":"flex"}} onClick={handleExpandClick}>
        <CardHeader
          title={props.newsTitle}
          subheader={props.publishDate}
          style={{"cursor":"default"}}
        />
      </div>
      <CardActions disableSpacing onClick={handleExpandClick}>
        <IconButton
          className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
          aria-expanded={expanded}
          aria-label="続きを読む"
        >
          <ExpandMoreIcon/>
        </IconButton>
      </CardActions>
      
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div onClick={handleExpandClick}>
            {props.newsBody}
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default NewsCard;
