import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useCampaignConfig } from "@hooks/useConfig";

import { makeStyles } from "@material-ui/core/styles";

import { Fab, Slide, Badge } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import useCount from "@hooks/useCount.js";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  /*  "@keyframes procafadeOut": {
    "0%": {
      opacity: 1,
      transform:"translateX(0)"
    },
    "100%": {
      opacity: 0,
      transform:"translateX(200%)"
    }
  },
  compact: {
    animation: `$procafadeOut 3000ms ${theme.transitions.easing.easeInOut}`,

  },*/
  fab: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
    zIndex: 2147483647, // max value
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

/*const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
*/
export default function FABAction(props) {
  //  const theme = useTheme();
  const [compact, setCompact] = useState(false);
  const { t } = useTranslation();
  const config = useCampaignConfig();

  let counter = useCount(props.actionPage);

  const handleClickOpen = () => {
    props.done();
  };

  const classes = useStyles();

  const createDom = (id) => {
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement("div");
      el.id = id;
      document.body.appendChild(el);
    }
    return el;
  };

  let defaultAction = "action.default";
  if (config.journey.includes("Donate")) defaultAction = "action.donate";
  if (config.journey.includes("Petition")) defaultAction = "action.sign";
  if (config.journey.includes("Email")) defaultAction = "action.email";

  let callToAction = t([
    "campaign:mainAction",
    config.component.register?.button,
    defaultAction,
  ]);

  window.addEventListener("scrollend", () => {
    if (!compact) {
      setTimeout(() => setCompact(true), 700);
    }
  });

  const dom = createDom("proca-fab");

  const min = config.component.counter?.min || 0;

  if (!counter || counter <= min) {
    counter = 0;
  }

  return (
    dom &&
    ReactDOM.createPortal(
      <>
        <div className={classes.fab}>
          <Slide direction="right" mountOnEnter unmountOnExit in={true}>
            <Badge
              badgeContent={counter}
              max={9999999}
              color="secondary"
              overlap="circular"
              invisible={compact}
            >
              <Fab
                color="primary"
                variant="extended"
                aria-label={callToAction}
                onClick={handleClickOpen}
              >
                <CreateIcon />
                {!compact && callToAction}
              </Fab>
            </Badge>
          </Slide>
        </div>
      </>,
      dom
    )
  );
}
