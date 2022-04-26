import React from 'react';
import PropTypes from "prop-types";

import List from '@material-ui/core/List';

import TwitterAction from './Action';

const component = (props) => {
  return (
  <List>
    {props.profiles.map((d) => 
      <TwitterAction clickable={props.clickable} form={props.form} key={d.id} actionPage={props.actionPage} done={props.done} actionUrl={props.actionUrl} {...d}></TwitterAction>
    )}
  </List>
  );
}

// you can have actionText (text of function(profile))
component.propTypes = {
  actionUrl : PropTypes.string,
  actionText : PropTypes.string,
};
export default component;

