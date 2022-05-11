import React from "react";
import ReactDOM from "react-dom";
import { useCampaignConfig } from "@hooks/useConfig";

import { makeStyles } from "@material-ui/core/styles";

import { Fab, Slide, Badge } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import useCount from "@hooks/useCount.js";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
    zIndex: theme.zIndex["tooltip"],
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

  const defaultAction = config.journey.includes("Petition")
    ? "Sign now!"
    : "register";
  let callToAction = t(config.component.register?.button || defaultAction);
  let isDonate = false;

  const nextAction = props.journey[props.current + 2];
  if (nextAction.startsWith("donate")) {
    isDonate = true;
    callToAction = t("donation.mobile.open");
  }

  const dom = createDom("proca-fab");

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
            >
              <Fab
                color="primary"
                variant="extended"
                aria-label={callToAction}
                onClick={handleClickOpen}
              >
                {!isDonate && <CreateIcon />}
                {callToAction}&nbsp;
              </Fab>
            </Badge>
          </Slide>
        </div>
      </>,
      dom
    )
  );
}
