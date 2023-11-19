import React from "react";
import { useTranslation } from "react-i18next";
//import useConfig from "@hooks/useConfig";

import { Grid, IconButton } from "@material-ui/core";

import InputAdornment from "@material-ui/core/InputAdornment";
import TwitterIcon from "../../images/Twitter.js";
import SvgIcon from "@material-ui/core/SvgIcon";

import TextField from "@components/TextField";
import HiddenField from "@components/field/Hidden";

import SearchIcon from "@material-ui/icons/Search";

const Twitter = (props) => {
  const { t } = useTranslation();
  //  const { config } = useConfig();

  const { setValue, getValues, setError, watch } = props.form;

  const [twitter, picture] = watch(["twitter", "picture"]);

  //variant={options.variant}
  //margin={options.margin}
  const handleBlur = (e) => {
    props.form.handleBlur && props.form.handleBlur(e);
    fetchTwitter(e.target.value);
  };

  const fetchTwitter = (screenName) => {
    if (!screenName) {
      return;
    }

    const api =
      "https://twitter.proca.app?screen_name=" +
      screenName.replace("https://twitter.com/", "");
    //    const api = "https://twitter.proca.app/?screen_name="+e.target.value;
    const field = "twitter";
    async function fetchAPI() {
      await fetch(api)
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then((res) => {
          if (res && res.error) {
            setError(field, "api", res.message.errors[0].message);
            return;
          }
          res.name = res.name
            .replace(
              /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,
              "",
            ) // no emoji
            .replace(/#\w\w+\s?/g, ""); // no hashtag
          if (res.url) {
            setValue("url", res.url);
            const domain = new URL(res.url).hostname;
            domain &&
              !getValues("email") &&
              setValue("email", "@" + domain.replace("www.", ""));
          }
          setValue("followers_count", res.followers_count);
          setValue("picture", res.profile_image_url_https);
          !getValues("comment") && setValue("comment", res.description);
        })
        .catch((err) => {
          setError(field, "api", err.toString());
          console.log(err);
        });
    }

    fetchAPI();
  };

  const handleClick = () => {
    fetchTwitter(getValues("twitter"));
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid item xs={12}>
        <TextField
          name="twitter"
          onBlur={handleBlur}
          helperText={
            !picture &&
            (getValues("twitter")
              ? t("help.submit", "use the search icon to get your picture")
              : t(
                  "help.twitter",
                  "for quicker verification of your submission and display your picture",
                ))
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {twitter && !picture ? (
                  <IconButton
                    aria-label="Fetch details from Twitter"
                    onClick={handleClick}
                    onMouseDown={handleMouseDown}
                  >
                    <SearchIcon />
                  </IconButton>
                ) : (
                  <SvgIcon>
                    {" "}
                    {picture ? (
                      <image href={picture} width={24} height={24} />
                    ) : (
                      <TwitterIcon />
                    )}
                  </SvgIcon>
                )}
              </InputAdornment>
            ),
          }}
          required={props.required}
          label={t("twitter.screenName", "Screen name")}
          form={props.form}
        />
      </Grid>
      <>
        <HiddenField form={props.form} name="picture" />
        <HiddenField form={props.form} name="url" />
        <HiddenField form={props.form} name="followers_count" />
      </>
    </>
  );
};

export default Twitter;
