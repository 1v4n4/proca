import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLayout } from "@hooks/useLayout";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    height: "auto!important",
    width: "100%",
  },
}));

const TextFieldProca = (props) => {
  const { t } = useTranslation();
  const layout = useLayout();
  const classes = useStyles();
  const refA = useRef();

  const handleValidate = (value, name, dom) => {
    dom.checkValidity();
    if (dom.validity.valid) {
      clearErrors(name); // synchronise the status to material-ui
      return true;
    }
    return dom.validationMessage;
  };

  const { errors, control, clearErrors } = props.form;
  //  const value = watch(props.name) || "";
  let validation = {
    html5: (v) => handleValidate(v, props.name, refA.current),
  };
  let drillProps = { ...props };
  if (props.validate) {
    validation.props = props.validate;
    delete drillProps.validate;
  }
  delete drillProps.onChange;
  delete drillProps.onBlur;
  return (
    <Controller
      defaultValue=""
      render={({ onChange, onBlur, value, name, ref }) => {
        let handleChange = onChange;
        let handleBlur = onBlur;
        if (props.onBlur) {
          handleBlur = (e) => onBlur(e) || props.onBlur(e);
        }

        if (props.onChange) {
          handleChange = (e) => onChange(e) || props.onChange(e);
        }
        return (
          <TextField
            InputLabelProps={{ shrink: !!(value && value.length > 0) }}
            onChange={handleChange}
            value={value}
            onBlur={handleBlur}
            className={classes.textField}
            error={!!(errors && errors[props.name])}
            helperText={
              errors && errors[props.name] && errors[props.name].message
            }
            variant={layout.variant}
            margin={layout.margin}
            inputRef={refA}
            {...drillProps}
          />
        );
      }}
      id={"proca_" + props.name}
      control={control}
      rules={{
        validate: validation,
        //       required: props.required // uncomment to bypass html5 native required
      }}
      inputRef={refA}
      name={props.name}
      label={/* i18next-extract-disable-line */ t(props.name)}
    />
  );
};

export default TextFieldProca;
