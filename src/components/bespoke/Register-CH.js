import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { Container, Grid } from "@material-ui/core";
/*import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

<Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
*/
import { makeStyles } from "@material-ui/core/styles";

import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  FormHelperText,
  Snackbar
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import SendIcon from "@material-ui/icons/Send";
import DoneIcon from "@material-ui/icons/Done";

import useForm from "react-hook-form";
import useQueries from "react-use-queries";
import { useTranslation } from "react-i18next";


import { addActionContact } from "../../lib/server.js";
import Url from "../../lib/urlparser.js";
import uuid from "../../lib/uuid.js";

let defaultValues = {
  firstname: "",
  lastname: "",
  email: "",
  postcode: "",
  locality: "",
  country: "CH",
  comment: ""
};

defaultValues = { ...defaultValues, ...Url.data() };

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  bigHelper: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    fontSize: "1em",
    width: "100%",
    color: "black",
    padding: "4px",
    lineHeight: "inherit"
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    width: "100%"
  },
  "#petition-form": { position: "relative" },
  "@global": {
    "select:-moz-focusring": {
      color: "transparent",
      textShadow: "0 0 0 #000"
    },
    "input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2
    }
  }
}));

const queries = {
  //    '(max-width: 440px)': 'col-12',
  "(min-width: 570px)": false
};

export default function Register(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [status, setStatus] = useState("default");
  if (props.values) defaultValues = { ...defaultValues, ...props.values };
  const {
    register,
    handleSubmit,
    setValue,
    errors,
    setError,
    clearError,
    watch,
    formState
  } = useForm({
    //    mode: "onBlur",
    //    nativeValidation: true,
    defaultValues: defaultValues
  });
  //  const { register, handleSubmit, setValue, errors } = useForm({ mode: 'onBlur', defaultValues: defaultValues });

  const postcode = watch("postcode");
  const locality = watch("locality");

  const [autoLocality, setLocality] = useState(null);
  useEffect(() => {
    if (postcode.length !== 4) return;
    const api = "https://postcode-ch.proca.foundation/"+postcode;

    async function fetchAPI() {
      await fetch(api)
      .then (res => {
        if (!res.ok) { throw Error(res.statusText); }
        return res.json()
      })
      .then(res => {console.log(res);if (res && res.name) {
        setLocality(res.name);
        setValue("locality", res.name);
      }})
      .catch(err => setError(err))
       
    }
    fetchAPI();
  },[postcode,setError,setValue]);


  const options = {
    margin: props.margin || "dense",
    variant: props.variant || "filled"
  };
  //variant: standard, filled, outlined
  //margin: normal, dense

  const onSubmit = async data => {
    data.tracking = Url.utm();
    const result = await addActionContact("register",props.actionPage, data);
    if (result.errors) {
      result.errors.forEach(error => {
        console.log(error);
      });
      setStatus("error");
      return;
    }
    setStatus("success");
    uuid(result.addAction); // set the global uuid as signature's fingerprint
    if (props.done instanceof Function) props.done (result);

    if (props.nextAction) props.nextAction();
    // sends the signature's ID as fingerprint
  };

  useEffect(() => {
    register({ name: "postcode" });
  }, [postcode,register]);

  const [[compact = true], mediaQueryListener] = useQueries(queries);

  useEffect(() => {
    const inputs = document.querySelectorAll("input, select, textarea");
    // todo: workaround until the feature is native react-form ?
    inputs.forEach(input => {
      input.oninvalid = e => {
        setError(
          e.target.attributes.name.nodeValue,
          e.type,
          e.target.validationMessage
        );
      };
    });
  }, [register, setError]);

  const handleBlur = e => {
    e.target.checkValidity();
    if (e.target.validity.valid) {
      clearError(e.target.attributes.name.nodeValue);
      return;
    }
  };

  function Error(props) {
    if (props.display)
      return (
        <Snackbar open={true} autoHideDuration={6000}>
          <Alert severity="error">
            Sorry, we couldn't save your signature!
            <br />
            The techies have been informed.
          </Alert>
        </Snackbar>
      );
    return null;
  }

  function Success(props) {
    if (props.display)
      return (
        <Snackbar open={true} autoHideDuration={6000}>
          <Alert severity="success">Done, Thank you for your support!</Alert>
        </Snackbar>
      );
    return null;
  }

  if (status === "success") {
    return (
      <Container component="main" maxWidth="sm">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <DoneIcon color="action" fontSize="large" my={4} />
          </Grid>
        </Grid>
      </Container>
    );
  }
  return (
    <form
      className={classes.container}
      onSubmit={handleSubmit(onSubmit)}
      method="post"
      url="http://localhost"
    >
      <Success display={status === "success"} />
      <Error display={status === "error"} />
      <Container component="main" maxWidth="sm">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={compact ? 12 : 6}>
            <TextField
              id="firstname"
              name="firstname"
              label={t("First name")}
              className={classes.textField}
              placeholder="eg. Albert"
              autoComplete="given-name"
              required
              inputRef={register}
              onBlur={handleBlur}
              error={!!(errors && errors.firstname)}
              helperText={
                errors && errors.firstname && errors.firstname.message
              }
              variant={options.variant}
              margin={options.margin}
            />
          </Grid>
          <Grid item xs={12} sm={compact ? 12 : 6}>
            <TextField
              id="lastname"
              name="lastname"
              label={t("Last name")}
              autoComplete="family-name"
              className={classes.textField}
              variant={options.variant}
              margin={options.margin}
              inputRef={register}
              placeholder="eg. Einstein"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              type="email"
              label={t("Email")}
              autoComplete="email"
              className={classes.textField}
              inputRef={register}
              onBlur={handleBlur}
              error={!!errors.email}
              helperText={errors && errors.email && errors.email.message}
              variant={options.variant}
              margin={options.margin}
              placeholder="your.email@example.org"
              required
            />
          </Grid>
          <Grid item xs={12} sm={compact ? 12 : 3}>
            <TextField
              id="postcode"
              name="postcode"
              label={t("Postal Code")}
              autoComplete="postal-code"
              required
              inputRef={register}
              onChange={onPostCode}
              className={classes.textField}
              variant={options.variant}
              margin={options.margin}
            />
          </Grid>
          <Grid item xs={12} sm={compact ? 12 : 9}>
            <TextField
              id="locality"
              name="locality"
              label={t("Locality")}
              autoComplete="address-level2"
              InputLabelProps = {{shrink : autoLocality || locality || false}}
              inputRef={register}
              className={classes.textField}
              variant={options.variant}
              margin={options.margin}
            />
          </Grid>
          <Grid item xs={12}>
            <FormHelperText
              className={classes.bigHelper}
              error={errors.privacy}
              variant={options.variant}
              margin={options.margin}
            >
    {t("consent.intro",{name:props.organisation})} *
            </FormHelperText>
          </Grid>
          <Grid item xs={12}>
            <RadioGroup aria-label="privacy consent" name="privacy" required>
              <FormControlLabel
                value="opt-in"
                inputRef={register}
                control={<Radio color="primary" />}
                label={t("consent.opt-in")}/>

              <FormControlLabel
                value="opt-out"
                control={<Radio />}
                inputRef={register({ required: "Yes or No?" })}
                label={t("consent.opt-out")}/>
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
        {t("consent.processing",{privacy_url:"https://proca.foundation/privacy"})}
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              size="large"
              disabled={formState.isSubmitting}
              endIcon={<SendIcon />}
            >
              {" "}
    {props.buttonText}
            </Button>
            {mediaQueryListener}
          </Grid>
        </Grid>
      </Container>
    </form>
  );
}

Register.propTypes = {
  actionPage: PropTypes.number.isRequired,
}
Register.defaultProps = {
  buttonText: "Register",
}

