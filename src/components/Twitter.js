import React, { useState, useEffect, useCallback, Fragment } from "react";

import TwitterList from "@components/twitter/List";
import { tweet } from "@components/twitter/Action";
import Dialog from "@components/Dialog";
import Alert from "@components/Alert";
import Country from "@components/Country";
import useData from "@hooks/useData";
import Register from "@components/Register";
import Message from "@components/twitter/Message";
import { useTranslation } from "react-i18next";
import { useCampaignConfig } from "@hooks/useConfig";
import { useForm } from "react-hook-form";
import { pickOne, tokenize } from "@lib/text";
import { Grid, Button } from "@material-ui/core";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import TwitterIcon from "../images/Twitter.js";
import Again from "@components/twitter/Again";
import { CardMedia, SvgIcon } from "@material-ui/core";
import ReloadIcon from "@material-ui/icons/Cached";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    width: "100%",
  },
}));

const Intro = (props) => {
  const { t } = useTranslation();
  const config = useCampaignConfig();
  if (!config.component.twitter?.filter?.includes("random")) return null;
  if (props.total === 0) {
    return <p>Selecting your target...</p>;
  }
  return (
    <Grid container alignItems="flex-start">
      <Grid item xs={8}>
        <p>
          {t("target.random", {
            total: props.total,
          })}
        </p>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          startIcon={<ReloadIcon />}
          onClick={props.handleClick}
        >
          Another
        </Button>
      </Grid>
    </Grid>
  );
};

const TweetButton = (props) => {
  const { t } = useTranslation();
  const config = useCampaignConfig();
  return (
    <Grid item xs={12}>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        onClick={props.handleClick}
        size="large"
        endIcon={
          <SvgIcon>
            <TwitterIcon />
          </SvgIcon>
        }
      >
        {t(config.component.tweet?.button || "Tweet")}
      </Button>
      {config.component.twitter?.next && (
        <Button endIcon={<SkipNextIcon />} variant="contained">
          {t("Next")}
        </Button>
      )}
    </Grid>
  );
};

const Component = (props) => {
  const { t } = useTranslation();
  const config = useCampaignConfig();
  const [profiles, setProfiles] = useState([]);
  const [data, setData] = useData();
  const [allProfiles, setAllProfiles] = useState([]);
  const [tweeting, setTweeting] = useState(false);
  const [dialog, viewDialog] = useState(false);
  let hash = data.hash || "fckD2IvUmiA01Mv-5pj5s842lEakJ5TWKpcZlCPXtPQ";

  const form = useForm({
    shouldUnregister: false,
    defaultValues: {
      ...data,
      message: "",
    },
  });
  const { watch } = form;
  const country = watch("country");
  let actionUrl = props.actionUrl || data?.actionUrl; // || window.location.href;
  if (data.hash && data.image) {
    // it's a meme
    actionUrl =
      "https://meme.fixthestatusquo.org/meme/" +
      data.hash +
      "?url=" +
      encodeURIComponent(document.location.origin + document.location.pathname);
  }
  console.log("actionUrl", actionUrl);
  const handleTweet = () => {
    tweet({
      actionPage: config.actionPage,
      message: form.getValues("message"),
      screen_name: profiles.map((d) => d.screen_name).join(","),
      actionUrl: actionUrl,
    });
    let target = data.targets ? data.targets.concat(profiles) : profiles;
    setTweeting(true);
    setData("targets", target);
  };
  useEffect(() => {
    const fetchData = async (url) => {
      await fetch(url)
        .then((res) => {
          if (!res.ok) throw res.error();
          return res.json();
        })
        .then((targets) => {
          if (
            config.hook &&
            typeof config.hook["twitter:load"] === "function"
          ) {
            config.hook["twitter:load"](targets);
          }
          let d = targets.filter(
            (c) => c.screen_name && c.screen_name.length > 0
          );
          d.forEach((c) => {
            if (c.country) c.country = c.country.toLowerCase();
          });
          setAllProfiles(d);
          if (config.component.twitter?.filter?.includes("random")) {
            if (data.country) {
              const r = d.filter(
                (c) => !c.country || c.country === data.country
              );
              if (r.length > 0) setAllProfiles(r);
            }

            const i = d[Math.floor(Math.random() * d.length)];
            form.setValue(
              "message",
              tokenize(
                pickOne(
                  t(["campaign:twitter.message", "campaign:share.twitter"])
                ),
                { profile: [i] }
              )
            );
            setProfiles([i]);
          } else if (!config.component.twitter.filter?.includes("country")) {
            setProfiles(d);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (config.component.twitter.listUrl)
      fetchData(config.component.twitter.listUrl);
    // eslint-disable-next-line
  }, [config.component, config.hook, setAllProfiles]);

  const filterRandomProfile = () => {
    const d = allProfiles;
    const i = d[Math.floor(Math.random() * d.length)];
    form.setValue(
      "message",
      tokenize(
        pickOne(t(["campaign:twitter.message", "campaign:share.twitter"])),
        { profile: [i] }
      )
    );
    setProfiles([i]);
  };

  const filterProfiles = useCallback(
    (country) => {
      //       setProfiles(allProfiles);
      if (!country) return;
      country = country.toLowerCase();
      const d = allProfiles.filter((d) => {
        return (
          d.country === country ||
          (d.country === "") | (d.constituency?.country === country)
        );
      });
      setProfiles(d);
    },
    [allProfiles]
  );

  useEffect(() => {
    console.log("country");
    //    setFilter({country:config.country});
    filterProfiles(country);
    /*    if (typeof config.hook["twitter:load"] === "function") {
      let d = allProfiles;
      config.hook["twitter:load"](d);
      setProfiles(d);
    }*/
  }, [country, filterProfiles]);

  const handleDone = (d) => {
    viewDialog(true);
  };

  const handleClose = (d) => {
    viewDialog(false);
  };

  const FirstStep = (props) => {
    return (
      <>
        {config.component.twitter?.filter?.includes("country") && (
          <Country form={form} list={config.component?.twitter?.countries} />
        )}
        <Intro total={allProfiles.length} handleClick={filterRandomProfile} />
        <TwitterList
          profiles={profiles}
          actionPage={props.actionPage}
          actionUrl={actionUrl}
          form={form}
          clickable={config.component.twitter?.clickable}
          done={handleDone}
        />
        {config.component.twitter?.message && <Message form={form} />}
        <ShowCard hash={hash} />
        <TweetButton handleClick={handleTweet} />
      </>
    );
  };

  const ShowCard = (props) => {
    const classes = useStyles();
    const image =
      process.env.REACT_APP_SUPABASE_URL +
      "/storage/v1/object/public/together4forests/meme/" +
      props.hash +
      ".jpeg";
    return <img src={image} className={classes.media} />;
  };
  //          "addLink": true,
  //          "showCard": true

  const SecondStep = () => {
    if (!tweeting) return null;

    return (
      <>
        <Again
          again={() => {
            filterRandomProfile();
            setTweeting(false);
          }}
          done={props.done}
        />
        <Alert severity="info">
          {t(
            "twitter.instruction",
            "Please complete sending the tweet in the new window (on twitter.com)"
          )}
        </Alert>
      </>
    );
  };

  return (
    <Fragment>
      <Dialog
        dialog={dialog}
        actionPage={props.actionPage}
        close={handleClose}
        content={Register}
        buttonText={config.param.register}
        name={config.param.dialogTitle || t("dialogTitle")}
      >
        <Register actionPage={props.actionPage} done={props.done} />
      </Dialog>
      {!tweeting && <FirstStep />}
      {tweeting && <SecondStep />}
    </Fragment>
  );
};

export default Component;
