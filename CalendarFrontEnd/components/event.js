import React from "react";
import { withStyles } from "@material-ui/core/styles";
// import Avatar from '@material-ui/core/Avatar';
import Chip from "@material-ui/core/Chip";
// import FaceIcon from '@material-ui/icons/Face';
// import DoneIcon from '@material-ui/icons/Done';

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 8,
    fontSize: 12,
  },
  pos: {
    marginBottom: 6,
  },
};

function handleDelete() {
  alert("You clicked the delete icon."); // eslint-disable-line no-alert
}

function handleClick() {
  alert("You clicked the Event."); // eslint-disable-line no-alert
}

function Event(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="headline" component="h2">
            Interview
          </Typography>
          <Typography color="textSecondary">Start: 3:00 PM</Typography>
          <Typography color="textSecondary">End: 4:00 PM</Typography>
          <Typography component="p">Description: On-site interviews</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Delete Event</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(Event);
