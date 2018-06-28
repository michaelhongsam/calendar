import React from "react";
import Chip from "@material-ui/core/Chip";

function handleDelete() {
  alert("You clicked the delete icon."); // eslint-disable-line no-alert
}

function handleClick() {
  alert("You clicked the Event."); // eslint-disable-line no-alert
}

function Event(props) {
  return (
      <Chip
        label={props.title}
        onClick={handleClick}
        onDelete={handleDelete}
      />
  );
}

export default Event
