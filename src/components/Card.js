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
//import moment from 'moment'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
  const place = content.place ? (<div style={{"display":"flex"}}><i className="tiny material-icons" style={{"marginTop":"8px"}}>place</i>　<div style={{"marginTop":"5px"}}><Typography>{content.place}</Typography></div></div>
  ):("")
  const target = content.target.length ? (
    <div style={{"display":"flex"}}><i className="tiny material-icons" style={{"marginTop":"8px"}}>person</i>　<div style={{"marginTop":"5px"}}><Typography>{content.target}</Typography></div></div>
  ):(
    <div style={{"display":"flex"}} className="valign-wrapper"><i className="tiny material-icons" style={{"marginTop":"8px"}}>person</i>　<div style={{"marginTop":"6px"}}>不明</div></div>
  )
  const maincontent = content.content.length ? (
		<div style={{"display":"flex"}}><i className="tiny material-icons" style={{"marginTop":"8px"}}>list</i>　<div style={{"marginTop":"5px"}}><Typography>{content.content}</Typography></div></div>
	):("")
  return (
    <div className="bigcontainer" >
      <div>{time}{place}{target}{maincontent}</div>
    </div>
  )
}

// const URL = props =>{
// 	const content = props.content;
//   const url = content.url.length ? (
//     <div className="valign-wrapper" style={{"display":"flex"}}>
//       <i className="tiny material-icons">link</i>
//       <a className="truncate" href={content.url} target="_blank" rel="noopener noreferrer" style={{"fontSize":"12px","width":"80%","paddingLeft":"10px"}}>{content.url}</a>
//     </div>
//     ):("")
//   return (
//     <div className="bigcontainer" style={{"padding":"15px 0"}}>{url}</div>
//   )
// }


const MyBox = (props) => {
  const content = props.content;
  const classes = useStyles();
  const genre = content.genre.length ? (<Grid><Paper elevation={0} className={classes.paper}>{content.genre}</Paper></Grid>):("")
  const genre2 = content.genre2.length ? (<Grid><Paper elevation={0} className={classes.paper}>{content.genre2}</Paper></Grid>):("")
  const type = content.type.length ? (<Grid><Paper elevation={0} className={classes.paper}>{content.type}</Paper></Grid>):("")
  const target = content.target.length ? (<Grid><Paper elevation={0} className={classes.paper}>{content.target}</Paper></Grid>):("")
  //const isHokkaido = content.hokkaidoOrNot.length ? (<Grid><Paper elevation={0} className={classes.paper}>{content.hokkaidoOrNot}</Paper></Grid>):("")
  return(
    <Grid container style={{marginLeft:"5px"}}>
      { genre }{ genre2 }{ target }{ type }
    </Grid>
  )
}

const MyCard = (props) => {
  const content = props.content;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
	const handleExpandClick = () => setExpanded(!expanded);
	const HeaderLink = (
			<div className="valign-wrapper" style={{"display":"flex"}}>
				<a style={{cursor:"pointer",width:"80%",display:"inline-block"}} className="truncate">
					{content.title}&nbsp;&nbsp;
					<i className="tiny material-icons">launch</i>
				</a>
			</div>)
	
  const week = ["","日","月","火","水","木","金","土"]
	const dayTime = `${content.fdate.format('M/D')} (${week[content.week]})　　${content.organizer}`
	
  return (
    <Card className={classes.root} variant="outlined" style={{"margin":"0.5em 0px"}} >
      <div onClick={ handleExpandClick }>
        <CardHeader
          title={ HeaderLink }
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
          {/* <URL content={ content } /> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default MyCard;


