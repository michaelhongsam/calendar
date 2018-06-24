import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  state = {
    month: this.props.month,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-month">Month</InputLabel>
          <Select
            value={this.state.month}
            onChange={this.handleChange}
            inputProps={{
              name: 'month',
              id: 'select-month',
            }}
          >
            <MenuItem value={'January'}>January</MenuItem>
            <MenuItem value={'February'}>February</MenuItem>
            <MenuItem value={'March'}>March</MenuItem>
            <MenuItem value={'April'}>April</MenuItem>
            <MenuItem value={'May'}>May</MenuItem>
            <MenuItem value={'June'}>June</MenuItem>
            <MenuItem value={'July'}>July</MenuItem>
            <MenuItem value={'August'}>August</MenuItem>
            <MenuItem value={'September'}>September</MenuItem>
            <MenuItem value={'October'}>October</MenuItem>
            <MenuItem value={'November'}>November</MenuItem>
            <MenuItem value={'December'}>December</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}
export default withStyles(styles)(SimpleSelect);