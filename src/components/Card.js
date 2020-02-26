import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from 'moment'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
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
  paper: {
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: "10px",
    padding:"4px",
    marginLeft:"10px",
    display: "inline-block",
    "background":"#eceff1",
  },
}));

const Details = (props) =>{
  const content = props.content;
  //const classes = useStyles();
  const time = content.time.length ? (
    <div className="valign-wrapper"style={{"display":"flex"}}><i className="tiny material-icons">access_time</i>　<Typography>{content.time}</Typography></div>
    ):(
      <div className="valign-wrapper"style={{"display":"flex"}}><i className="tiny material-icons">access_time</i>　不明</div>
    )
  const place = content.place ? (<div><p>場所:</p><Typography>{content.place}</Typography></div>):("")
  const organizer = content.organizer.length ? (<div style={{"display":"flex"}}><p>organizer:　</p><Typography style={{"margin":"16px 0px"}}>{content.organizer}</Typography></div>):("")
  const target = content.target.length ? (
    <div style={{"display":"flex"}}><i className="tiny material-icons" style={{"marginTop":"8px"}}>person</i>　<div style={{"marginTop":"5px"}}><Typography>{content.target}</Typography></div></div>
  ):(
    <div style={{"display":"flex"}} className="valign-wrapper"><i className="tiny material-icons" style={{"marginTop":"8px"}}>person</i>　<div style={{"marginTop":"6px"}}>不明</div></div>
  )
  const maincontent = content.content.length ? (<div><p>内容:</p><Typography>{content.content}</Typography></div>):("")
  // const url = content.URL.length ? (
  //   <div className="valign-wrapper"style={{"display":"flex"}}><i className="tiny material-icons">link</i><a className="truncate" href={content.URL} style={{"fontSize":"12px","width":"80%","paddingLeft":"10px"}}>{content.URL}</a></div>
  // ):("")

  return (
    <div className="bigcontainer" >
      <div>{time}{place}{target}{organizer}{maincontent}</div>
    </div>
  )
}

const URL = props =>{
  const content = props.content;
  const url = content.url.length ? (
    <div className="valign-wrapper"style={{"display":"flex"}}>
      <i className="tiny material-icons">link</i>
      <a className="truncate" href={content.URL} target="_blank" rel="noopener noreferrer" style={{"fontSize":"12px","width":"80%","paddingLeft":"10px"}}>{content.url}</a>
    </div>
  ):("")
  return (
    <div className="bigcontainer" style={{"padding":"15px 0"}}>{url}</div>
  )}


const MyBox = (props) => {
  const content = props.content;
  const classes = useStyles();
  const genre = content.genre.length ? (<Grid><Paper elevation={0} className={classes.paper}>{content.genre}</Paper></Grid>):("")
  const target = content.target.length ? (<Grid><Paper elevation={0} className={classes.paper}>{content.target}</Paper></Grid>):("")
  const isHokkaido = content.hokkaidoOrNot.length ? (<Grid><Paper elevation={0} className={classes.paper}>{content.hokkaidoOrNot}</Paper></Grid>):("")
  return(
    <Grid container style={{marginLeft:"10px"}}>
    { genre }{ target }{ isHokkaido }
    </Grid>
  )
}

const MyCard = (props) => {
  const content = props.content;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const week = ["","日","月","火","水","木","金","土"]
  //https://momentjs.com/docs/#/displaying/format/
  const dayTime = `${content.fdate.format('M/D')} (${week[content.week]})`
  //const dayTime = `${content.日程.substr(5,5).replace('-','/')}  (${week[content.曜日]})`

  return (
    <Card className={classes.root} variant="outlined" style={{"margin":"1em 0px"}} >
      <div style={{"display":"flex"}} onClick={handleExpandClick}>
        <CardHeader
          title={ content.title }
          subheader={ dayTime }
          style={{"cursor":"default"}}
        />
      </div>
      <CardActions disableSpacing onClick={handleExpandClick}>
        <MyBox content={ content }/>
        <IconButton
          className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon/>
        </IconButton>
      </CardActions>
      

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div onClick={handleExpandClick}>
            <Details content={ content }/>
          </div>
          <URL content={ content } />
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default MyCard;