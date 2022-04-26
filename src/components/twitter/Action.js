import React,{useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from "prop-types";
// TODO: use it to check tweets' length https://www.npmjs.com/package/twitter-text

//import { ReactComponent as TwitterIcon } from '../images/Twitter.svg';
import TwitterIcon from '../../images/Twitter.js';

import {addAction} from '@lib/server';
import uuid from '@lib/uuid';

  const tweet = ({message, screen_name, actionUrl, done, actionPage}) => {
  const addTweet = (event,actionPage,screenName) => {
    addAction(actionPage,event,{
        uuid: uuid(),
//        tracking: Url.utm(),
        payload: [{key:"screen_name",value:screenName}]
    });
  }
    if (Array.isArray(screen_name)) {
      const r = screen_name.map ( d => d.screen_name);
      screen_name = r.join (' @');
    }
    let t=message;
//    let t = typeof profile.actionText == "function" ? profile.actionText(profile): profile.actionText;

    if (t.indexOf("{@}") !== -1) 
      t = t.replace("{@}", "@" + screen_name);
    else t = ".@" + screen_name + " " + t;

    if (actionUrl) {
      if (t.indexOf("{url}") !== -1) 
        t = t.replace("{url}", actionUrl);
      else t = t+ " " + actionUrl;
    }
    const url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(t);
    let win = window.open(
      url,
      "tweet-"+screen_name,
      "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=550"
    );
    addTweet("twitter_click",screen_name);

    var timer = setInterval( () => {
      if(!win) return; // window popup blocked?
    const closed= win.closed ;
    if(closed) {
      clearInterval(timer);
      addTweet("twitter_close",screen_name);
      if (done instanceof Function)
        done();
    }}, 10000);

  }

const component= function TwitterAction(profile) {
  const [disabled, disable] = useState(false);
  const [selected, select] = useState(false);
  const img = () => profile.profile_image_url_https;

  const clickable = profile.clickable;

  const onClick=(e) => {
    const done = () =>{
      disable(true);
      select(false);
      profile.done && profile.done();
    };
    tweet ({actionPage:profile.actionPAge, message:profile.form.getValues("message"),screen_name:profile.screen_name,actionUrl:profile.actionUrl,done:done});
    select(true);
  };


  return (
      <ListItem alignItems="flex-start" selected={selected} disabled={disabled} button={clickable} onClick={onClick} divider={false}>
        <ListItemAvatar>
          <Avatar 
             src={img()} />
        </ListItemAvatar>
        <ListItemText
          primary={profile.name}
          secondary={profile.description}
        />
    {clickable && <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Tweet" onClick={onClick}>

                      <SvgIcon><TwitterIcon/></SvgIcon>
                    </IconButton>
                  </ListItemSecondaryAction>
    }
      </ListItem>
  );
}

//component.defaultProps = {
//  screen_name = "eucampaign";
//  text
//  via
//}

// you can have actionText (text of function(profile))
component.propTypes = {
  screen_name: PropTypes.string.isRequired,
  name: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  actionUrl : PropTypes.string,
  description : PropTypes.string,
  className: PropTypes.string,
  
};
export default component;
export {tweet};
