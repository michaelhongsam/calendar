import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Event from './event'

//function handleClick(){console.log('clicked a day')}

function Day(props) {
  let date = props.date
  let handleClick = props.onClick
  // const { classes } = props;
  // const bull = <span className={classes.bullet}>•</span>;
  // console.log(props.date)
    return (
        <Card onClick={handleClick}>
        { 
          date ? (
            <div>
              <CardHeader title={date}/>
              <CardContent>
                <Event title={'title: '}/>
              </CardContent>
            </div>
          ) : (
            <div />
          )
        }
        </Card>
    );
  }


export default Day;
