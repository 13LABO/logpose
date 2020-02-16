import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
//import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import { red } from '@material-ui/core/colors';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
//import { maxWidth } from '@material-ui/system';

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
    display: "inline-block"
  },
}));

const Details = (props) =>{
  const content = props.content;
  //const classes = useStyles();
  const time = content.時間.length ? (<div><p>時間: </p><Typography>{content.時間}</Typography></div>):("")
  const place = content.場所 ? (<div><p>場所:</p><Typography>{content.場所}</Typography></div>):("")
  const organizer = content.主催.length ? (<div><p>主催:</p><Typography>{content.主催}</Typography></div>):("")
  const target = content.対象.length ? (<div><p>対象:</p><Typography>{content.対象}</Typography></div>):("")
  const maincontent = content.内容.length ? (<div><p>内容:</p><Typography>{content.内容}</Typography></div>):("")
  const url = content.URL.length ? (
    <div><p>URL: </p><a className="truncate" href={content.URL} style={{"fontSize":"12px","width":"60%","paddingLeft":"10px"}}>{content.URL}</a>
    <i style={{"display":"inline-block"}} class="tiny material-icons blue-text">launch</i></div>
  ):("")

  return (
    <div>
      {time}{place}{organizer}{target}{maincontent}{url}
    </div>
  )

}



const MyBox = (props) => {
  const content = props.content;
  const classes = useStyles();
  const genre = content.ジャンル.length ? (<Grid><Paper className={classes.paper}>{content.ジャンル}</Paper></Grid>):("")
  const target = content.対象.length ? (<Grid><Paper className={classes.paper}>{content.対象}</Paper></Grid>):("")
  const isHokkaido = content.道内or道外.length ? (<Grid><Paper className={classes.paper}>{content.道内or道外}</Paper></Grid>):("")
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
  const dayTime = `${content.日程.substr(5,5).replace('-','/')}  (${week[content.曜日]})`

  return (
    <Card className={classes.root} variant="outlined" style={{"borderRadius":"0.7em","margin":"1em 0px"}}>
      <CardHeader
        onClick={handleExpandClick}
        title={ content.タイトル }
        subheader={ dayTime }
        style={{"cursor":"default"}}
      />

      <CardActions disableSpacing>
        <MyBox content={ content }/>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      

      <Collapse in={expanded} timeout="auto" unmountOnExit>

        <CardContent>
          {/* <Typography paragraph>内容:</Typography> */}
          <Details content={ content } />
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default MyCard;