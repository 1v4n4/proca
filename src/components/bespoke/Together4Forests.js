import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import UploadImage from "./UploadImage";
import CreateMeme from "./meme/CreateMeme";
//import SelectMeme from "./meme/Select";

const Together4Forests = (props) => {
  const [state, setState] = React.useState({
    meme: false,
    create: true,
    picture: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      Do you want to
      {/*
      <Accordion expanded={state.meme}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
        >
          <FormControlLabel
            control={
              <Switch
                checked={state.meme}
                onChange={handleChange}
                name="meme"
              />
            }
            label="Choose a meme"
          />
        </AccordionSummary>
        <AccordionDetails>
    <SelectMeme />
        </AccordionDetails>
      </Accordion>
          */}
      <Accordion expanded={state.create}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <FormControlLabel
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={
              <Switch
                checked={state.create}
                onChange={handleChange}
                name="create"
              />
            }
            label="Create a new meme"
          />
        </AccordionSummary>
        <AccordionDetails>
          <CreateMeme form={props.form} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={state.picture}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={
              <Switch
                checked={state.picture}
                onChange={handleChange}
                name="picture"
              />
            }
            label="Upload an image"
          />
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Typography color="textSecondary">
              Upload a picture of yourself in the forest or a drawing from your
              child.
            </Typography>
            <UploadImage />
          </div>
        </AccordionDetails>
      </Accordion>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              inputRef={props.form.register}
              color="primary"
              name="certify"
              required
            />
          }
          label="I confirm that the opinions expressed do not intend to cause offence or instigate violence"
        />
        <FormControlLabel
          control={
            <Checkbox
              inputRef={props.form.register}
              color="primary"
              name="certify"
              required
            />
          }
          label="I take responsibility for the use of the image"
        />
        <div>
          <small>
            WWF or the #Together4Forests NGOs are not responsible for any
            content that I create.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Together4Forests;
