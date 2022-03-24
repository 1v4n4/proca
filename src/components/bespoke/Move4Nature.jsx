import { Box, Fab, Grid, InputAdornment } from "@material-ui/core";

import TextField from "@components/TextField";
import { useTranslation } from "react-i18next";

const Icons = (props) => {
  const { t } = useTranslation();
  const { setValue, watch } = props.form;
  const current = watch ("activity");

  const icons = [
<svg viewBox="0 0 95.6 74.3"><path d="M59.8 56.2c-6.1-.4-12.1-.8-18-1.2-2.8-.2-5.7-.2-8.5-.2-5.4.1-10.8-.1-16.1-1.5-2.6-.7-5.1-1.8-7.2-3.6-1.1-1-1.2-1.4-.4-2.6.7-1.2 1.4-2.5 2.2-3.7.9-1.3 1.4-2.7 1.6-4.2.5-4.2 1-8.5.6-12.7-.1-.7-.3-1.5-.3-2.2-.2-1.7.7-3.2 2.3-3.7s3.2.3 4.1 1.8c.7 1.3 1.4 2.7 2.4 3.9 2.5 3.2 6.4 3.5 9.6 1 .1-.1.2-.2.4-.3.9-.6 1.3-1.4 1.3-2.5 0-2.6 1.4-4.5 3.6-5.8 1.1-.6 2.3-.7 3.3-.1 1.2.7 2.3 1.4 3.2 2.3 1.6 1.6 3 3.4 4.5 5.1 1.5 1.8 3.2 3.3 5.3 4.4 2.9 1.4 5.7 2.9 8.5 4.4 3 1.5 6.2 2.1 9.5 2.4 3.1.3 6.3.6 9.4 1.2 1.2.2 2.3.8 3.4 1.4 1.9 1.2 3.1 3.9 2 6.4-1.3 2.9-3.5 5-6.2 6.5-3.3 1.8-7 2.7-10.7 3.1-3.5.2-6.8.2-9.8.4zM41.5 27.1c-2.5-1.2-4.5-1-6.3.6-.6.5-1.2 1.1-1.8 1.6-2.3 1.8-4.9 2.5-7.8 2s-4.8-2.4-6.4-4.7c-.6-1-1.1-2.1-1.7-3-.2-.3-.7-.5-.9-.5-.2.1-.5.6-.5.9-.1.4.1.7.2 1.1.7 4.3.2 8.7-.2 13-.1.8-.2 1.5-.3 2.3h11.5c.6 0 .9-.1 1.3-.5 2.1-2.2 4.3-4.3 6.5-6.5.8-.8 1.4-.8 2.2 0l3.6 3.6c.7.7.7 1.3 0 2.1-.8.9-1.7 1.7-2.5 2.5l-.7.7c.9.3 1.7.5 2.4.7.5.2.8.1 1.2-.3 1.7-1.8 3.5-3.6 5.3-5.3 1-1 1.5-1 2.5 0l2.9 2.9c1.3 1.3 1.4 1.7 0 3-.6.6-1.3 1.2-2.1 1.9 11.7 2.4 23 2.6 34-1.8-.4-1.5-1.6-2.1-2.8-2.4-2-.4-4-.8-6-1-3.1-.4-6.1-.7-9.2-1.1-.2 0-.6.1-.7.3-.7.7-1.4 1.5-2.1 2.2-.7-.7-1.3-1.3-2.1-2 .6-.5 1.2-.9 1.9-1.4-1.3-.6-2.4-1.1-3.4-1.6-.2-.1-.6.1-.7.2-.7.7-1.4 1.5-2 2.1-.7-.7-1.3-1.2-2.1-1.9.7-.6 1.3-1.2 2.1-1.9-1.7-.9-3.3-1.8-4.9-2.7-.1-.1-.5.1-.7.3-.8.8-1.5 1.6-2.3 2.3-.7-.6-1.3-1.2-2-1.9l2.4-2.1c-1.7-.9-3.3-1.8-4.9-2.6-.2-.1-.6 0-.7.2-.9.8-1.7 1.7-2.5 2.6-.7-.7-1.3-1.2-1.9-1.9.6-.5 1.4-1.2 2.2-2zM12 48c1.9 1.5 3.9 2.3 6 2.8 4.6 1.2 9.2 1.4 13.9 1.4 2.3 0 4.6-.1 6.9 0 6.3.3 12.6.8 19 1.1 4.8.2 9.6.3 14.4-.7 3-.6 5.9-1.6 8.4-3.5.8-.6 1.5-1.4 2.2-2.1 0-.1-.1-.1-.1-.2-.2 0-.4.1-.5.1-9.5 3.1-19.1 3.2-28.8 1.6-6.1-1-12-2.5-18-4.3-6.6-1.9-13.3-1.6-20.1-1.2-.2 0-.4.1-.5.3-1 1.6-1.9 3.1-2.8 4.7zm24.3-11.9l-4.7 4.7c.9.2 1.9.4 2.9.6.2 0 .4 0 .5-.2 1.1-1 2.1-2.1 3.2-3.2-.7-.7-1.4-1.3-1.9-1.9zm7.8-10.9c-.6-.7-1.1-1.4-1.8-2-.8-.8-1.6-1.5-2.5-2.1-.4-.3-1.2-.4-1.6-.2-1.2.6-2 1.7-2.2 3.3 3-1.1 5.5 0 8.1 1zM43.8 44c1 .2 2 .5 2.9.7.1 0 .3 0 .4-.1l2.7-2.7c-.7-.7-1.3-1.4-1.9-2L43.8 44z" /><path fill="none" d="M-.1.1h95.8v74.1H-.1z"/></svg>,
<svg viewBox="0 0 95.6 74.3" ><path d="M82 60c-.1.4-.2.8-.4 1.2-1 3-3.7 4.9-6.9 4.9H34.3c-.3 0-.7 0-1-.1-.6-.2-1-.7-.9-1.4.1-.6.5-1.1 1.1-1.1h16.4c-.2-.2-.4-.3-.5-.4-1.5-1.1-3.1-2.1-4.4-3.3-3.4-2.9-6.6-6-9.9-8.9-.3-.2-.7-.4-1.1-.4H18.4c-.7-.1-1.2-.6-1.2-1.3s.4-1.2 1.1-1.4h13.3c-.5-.4-.8-.8-1.2-1.1-3.8-3.4-7.6-6.8-11.3-10.3-4.5-4.1-3.7-10.9 1.6-13.9.2-.1.4-.4.5-.6 1.6-7.2 7.1-12.5 14.4-13.5.7-.1 1.4-.1 2.1-.2.9 0 1.3.3 1.6 1.1.3.9.5 1.8.8 2.7 1.2 3.8 5.2 6.1 9.1 5.1 2.3-.6 4.3-.3 6.2 1.2.9.7 1.5 1.7 1.9 2.8 2.6 6.7 5.2 13.3 7.7 20 1.1 2.8 3 4.6 5.8 5.4 1.9.6 3.9 1.1 5.6 2.2 3.1 2.1 4.9 5 5.4 8.7 0 .1.1.2.1.3.1.8.1 1.5.1 2.3zM32.4 31.4l3 3.3c.8.9 1.6 1.7 2.3 2.6.5.6.5 1.4 0 1.9s-1.3.5-1.9-.1l-.5-.5L23 25.1c-.4-.4-.6-.4-1.1-.2-1.7 1-2.7 2.6-2.9 4.6-.2 2.2.7 3.8 2.3 5.2C29.9 42.4 38.4 50.2 47 58c3.6 3.2 7.8 5.2 12.6 5.4 5.2.2 10.3.1 15.5.1 1.2 0 2.3-.6 3.1-1.5.4-.4.6-1 1-1.6h-9c-7.9 0-14.9-2.4-21.1-7.3-1.8-1.5-3.4-3.3-5.1-5-.6-.6-.5-1.4 0-1.9.6-.5 1.4-.5 2 .1.2.2.4.4.5.6 1.5 1.5 3.1 2.9 4.6 4.4.3.3.5.3.9.1l3.9-1.8c.4-.2.7-.4 1.1-.6-.1-.3-.3-.4-.4-.6-3.7-6.5-7.5-12.9-11.2-19.4-1-1.8-1.5-3.7-1.1-5.8.3-1.1.8-2.2 1.2-3.3-2.1-.4-4-1.4-5.6-3.1-1.6-1.7-2.4-3.7-2.9-5.9-2 0-5.5 1.1-6.7 2.3 5.6 4.1 7.1 12.3 2.1 18.2zM59 33c-.6.3-1.1.5-1.6.7-.9.4-1.7.1-2-.6-.3-.8 0-1.5.9-1.9.6-.3 1.1-.5 1.7-.8-.6-1.4-1.1-2.8-1.6-4.1-.6.3-1.1.5-1.6.7-.8.3-1.6.1-1.9-.6-.3-.7 0-1.5.8-1.9.5-.3 1.1-.5 1.7-.8-.4-.9-.7-1.9-1.2-2.7-.6-1.1-1.7-1.7-3-1.6-1.9.1-3.2 1.2-4 2.9-.9 1.8-.7 3.6.3 5.3 3.8 6.5 7.6 13 11.3 19.6.1.2.2.3.4.5 1.5-1 3-2 4.4-2.9-.8-1.8-1.5-3.4-2.2-5.1-.3.1-.7.3-1 .4-.8.3-1.5.1-1.9-.6-.3-.7 0-1.4.8-1.8.4-.2.8-.4 1.2-.5-.4-1.4-.9-2.8-1.5-4.2zm-4.7 20.4c4.2 2.5 8.7 3.9 13.5 4.2 3.6.2 7.3.1 10.9.1.1 0 .2 0 .4-.1v-.2c0-.1 0-.3-.1-.4-.8-3.6-3.1-6-6.6-7.2-2.4-.8-4.9-1.3-6.7-3-1.9 1.2-3.7 2.4-5.6 3.5-1.8 1.1-3.8 2-5.8 3.1zM28 15c-1.7 1.4-3.3 4.2-3.9 6.7-.1.4 0 .6.2.9 1.7 1.8 3.4 3.7 5 5.5.4.4.7.8 1.1 1.2 3.9-4.2 2.8-11.4-2.4-14.3zM22.3 66.1h-4.5c-1 0-1.6-.6-1.5-1.5.1-.7.6-1.2 1.4-1.2h9.2c.8 0 1.4.6 1.4 1.3 0 .8-.6 1.3-1.4 1.3-1.5.1-3 .1-4.6.1z"/><path class="st0" d="M29.2 58.2h-4.1c-1 0-1.5-.5-1.5-1.4 0-.8.6-1.3 1.5-1.3h8.1c1 0 1.6.5 1.6 1.3s-.6 1.3-1.6 1.3c-1.3.1-2.7.1-4 .1zM16.7 58.2h-1.8c-.8 0-1.3-.6-1.3-1.3s.6-1.3 1.4-1.4h3.6c.8 0 1.4.6 1.4 1.3 0 .8-.5 1.3-1.4 1.3-.7.2-1.3.1-1.9.1zM40.9 44c-.8 0-1.4-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3s1.3.6 1.3 1.4c0 .6-.6 1.2-1.3 1.2z"/><path fill="none" d="M-.1.1h95.8v74.1H-.1z"/></svg>,

    <svg viewBox="0 0 95.6 74.3"><path d="M88.7 47c-.3 1.3-.5 2.7-1 4-3.7 10.6-16 14.9-25.4 8.7-5.5-3.6-8-8.9-7.5-15.5.4-5.3 2.9-9.5 7.3-12.6.2-.1.3-.2.6-.4l-2.1-3.9c-.3.4-.5.7-.7 1-4.1 5.9-8.1 11.7-12.2 17.6-.5.8-1.1 1.1-2.1 1.1-1.6-.1-3.2 0-4.8 0-.7 5.8-3.4 10.4-8.4 13.4-3.8 2.3-8 2.9-12.4 1.9-9-2.3-14.5-11-12.8-20.2C8.8 33.7 18.6 25.4 30 29.7c.8-1.7 1.7-3.4 2.3-5.2.3-1 .1-2.3.1-3.5h-1.9c-1 0-1.5-.5-1.5-1.3s.6-1.3 1.5-1.3h7.3c1 0 1.5.5 1.5 1.3s-.6 1.2-1.5 1.2h-2.7v2.4h24.6v-5.4c0-1.7 0-1.7-1.6-2.2-1.4-.5-2.9-1-4.3-1.6-.9-.3-1.2-1-.9-1.7.3-.6.9-.9 1.7-.7 2.2.8 4.4 1.6 6.6 2.5.7.3.9.8.9 1.5v7.8c0 .5.1 1 .4 1.4.8 1.6 1.6 3.2 2.5 4.8 1.4-.3 2.6-.7 4-1 9.4-1.7 18.4 4.9 19.7 14.4 0 .3.1.6.2.8-.2 1.1-.2 2.1-.2 3.1zM63.9 33.3c-6 3.6-8.9 11.9-5 19.1 3.8 7.1 12.8 9.7 19.7 5.8 7.1-4 9.6-13 5.6-19.9-4.3-7.3-12.7-8.7-18.1-6.1.1.2.2.5.3.7 2 3.8 3.9 7.6 5.9 11.4.1.3.3.6.4.9.2.6-.1 1.1-.6 1.4-.6.3-1.1.2-1.5-.3-.2-.2-.3-.5-.4-.8l-4.5-8.7c-.6-1.1-1.2-2.3-1.8-3.5zM28.8 32c-4.2-1.9-10.9-1.2-15.3 3.4-4.7 4.9-5.4 12-1.9 17.7 3.4 5.5 10.2 8.1 16.4 6.3 6.5-1.9 10-7.8 10.2-12.6h-14c-1.2 0-1.7-.8-1.3-1.9l.3-.6 5.4-11.4c-.1-.3.1-.6.2-.9zm29.4-6c-.1-.1-.2-.1-.2-.1H34.9c-.2 0-.5.1-.6.3l-2.1 4.5c5.1 3.1 8 7.6 8.6 13.6H45c.5 0 .8-.2 1.1-.6 2.3-3.4 4.7-6.8 7-10.2l5.1-7.5zM38.3 44.2c-.6-4.9-3-8.6-7.2-11.2-1.8 3.8-3.5 7.4-5.3 11.2h12.5z" /><path fill="none" d="M-.1.1h95.8v74.1H-.1z"/></svg>
,
<svg viewBox="0 0 95.6 74.3" ><path  d="M24 50.2c1.4 0 2.1.4 2.9.9.9.6 1.9 1.2 3.9 1.2s3-.7 3.9-1.2c.8-.5 1.5-.9 2.9-.9s2.1.4 2.9.9c.9.6 1.9 1.2 3.9 1.2s3-.7 3.9-1.2c.8-.5 1.5-.9 2.9-.9s2.1.4 2.9.9c.8.5 1.7 1.1 3.3 1.2H58c2 0 3-.7 3.9-1.2.8-.5 1.5-.9 2.9-.9s2.1.4 2.9.9c.9.6 1.9 1.2 3.9 1.2.5 0 1-.4 1-1 0-.5-.4-1-1-1-1.4 0-2.1-.4-2.9-.9-.9-.6-1.9-1.2-3.9-1.2s-3 .7-3.9 1.2c-.7.5-1.3.8-2.4.9V15.8c0-1.9 1.5-3.4 3.4-3.4s3.4 1.5 3.4 3.4V18c0 .5.4 1 1 1 .5 0 1-.4 1-1v-2.2c0-2.9-2.4-5.3-5.3-5.3s-5.3 2.4-5.3 5.3v9.4H39.1v-9.4c0-1.9 1.5-3.4 3.4-3.4s3.4 1.5 3.4 3.4V18c0 .5.4 1 1 1 .5 0 1-.4 1-1v-2.2c0-2.9-2.4-5.3-5.3-5.3s-5.3 2.4-5.3 5.3v32.5c-1.7.1-2.6.7-3.4 1.2-.8.5-1.5.9-2.9.9s-2.1-.4-2.9-.9c-1.1-.6-2.1-1.2-4.1-1.2-.5 0-1 .4-1 1 .1.4.5.9 1 .9zm32.6-6.9H39.1v-7.1h17.5v7.1zm-5.4 5c-2 0-3 .7-3.9 1.2-.8.5-1.5.9-2.9.9s-2.1-.4-2.9-.9c-.7-.4-1.4-.9-2.5-1.1v-3.2h17.5v5.1c-.6-.2-1-.4-1.5-.7-.8-.7-1.8-1.3-3.8-1.3zm5.4-21.2v7.1H39.1v-7.1h17.5zM71.6 56.1c-1.4 0-2.1-.4-2.9-.9-.9-.6-1.9-1.2-3.9-1.2s-3 .7-3.9 1.2c-.8.5-1.5.9-2.9.9s-2.1-.4-2.9-.9c-.9-.6-1.9-1.2-3.9-1.2s-3 .7-3.9 1.2c-.8.5-1.5.9-2.9.9s-2.1-.4-2.9-.9c-.9-.6-1.9-1.2-3.9-1.2s-3 .7-3.9 1.2c-.8.5-1.5.9-2.9.9s-2.1-.4-2.9-.9C27 54.6 26 54 24 54c-.5 0-1 .4-1 1 0 .5.4 1 1 1 1.4 0 2.1.4 2.9.9.9.6 1.9 1.2 3.9 1.2s3-.7 3.9-1.2c.8-.5 1.5-.9 2.9-.9s2.1.4 2.9.9c.9.6 1.9 1.2 3.9 1.2s3-.7 3.9-1.2c.8-.5 1.5-.9 2.9-.9s2.1.4 2.9.9C55 57.4 56 58 58 58s3-.7 3.9-1.2c.8-.5 1.5-.9 2.9-.9s2.1.4 2.9.9c.9.6 1.9 1.2 3.9 1.2.5 0 1-.4 1-1-.1-.4-.5-.9-1-.9zM71.6 61.8c-1.4 0-2.1-.4-2.9-.9-.9-.6-1.9-1.2-3.9-1.2s-3 .7-3.9 1.2c-.8.5-1.5.9-2.9.9s-2.1-.4-2.9-.9c-.9-.6-1.9-1.2-3.9-1.2s-3 .7-3.9 1.2c-.8.5-1.5.9-2.9.9s-2.1-.4-2.9-.9c-.9-.6-1.9-1.2-3.9-1.2s-3 .7-3.9 1.2c-.8.5-1.5.9-2.9.9s-2.1-.4-2.9-.9c-.9-.6-1.9-1.2-3.9-1.2-.5 0-1 .4-1 1 0 .5.4 1 1 1 1.4 0 2.1.4 2.9.9.9.6 1.9 1.2 3.9 1.2s3-.7 3.9-1.2c.8-.5 1.5-.9 2.9-.9s2.1.4 2.9.9c.9.6 1.9 1.2 3.9 1.2s3-.7 3.9-1.2c.8-.5 1.5-.9 2.9-.9s2.1.4 2.9.9c.9.6 1.9 1.2 3.9 1.2s3-.7 3.9-1.2c.8-.5 1.5-.9 2.9-.9s2.1.4 2.9.9c.9.6 1.9 1.2 3.9 1.2.5 0 1-.4 1-1s-.5-1-1-1z"/><path fill="none" d="M-.1.1h95.8v74.1H-.1z"/></svg>

,


    <svg viewBox="-100 -100 640 640"><path d="M144.2 167.4h.1l-3.7-21.3c-.2-.6-.3-1.2-.3-1.8L120.9 33.5c-.8-4.8-5.9-9.1-10.8-9.1h-8.5L122.8 146c.7 4.1-2 8-6.1 8.7-.4.1-.9.1-1.3.1-3.6 0-6.7-2.6-7.4-6.2L86.4 24.4H45.5c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5h64.7c12.2 0 23.5 9.4 25.6 21.5l18.4 105.4H367c12.7 0 23 10.3 23 23v48.4c0 4.1-3.4 7.5-7.5 7.5s-7.5-3.4-7.5-7.5v-48.4c0-4.4-3.6-8-8-8H156.7l2.9 16.9c42.9 4.6 80.3 28.1 103.5 62.1h119.2c13.4 0 24.4 10.9 24.4 24.4v56.9c0 4.1-3.4 7.5-7.5 7.5h-9.4v42.7c21.5 3.1 38.6 20.2 41.9 41.7h30.7c4.1 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5h-30.7c-3.6 23.9-24.3 42.2-49.1 42.2-27.4 0-49.7-22.3-49.7-49.7 0-24.8 18.2-45.3 41.9-49.1V319h-64c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5h80.9v-49.4c0-5.2-4.2-9.4-9.4-9.4H272.1c10.3 19.9 16.2 42.4 16.2 66.3 0 79.5-64.7 144.2-144.2 144.2S0 391 0 311.5s64.7-144.1 144.2-144.1zM348 410.9c0 19.1 15.6 34.7 34.7 34.7s34.7-15.6 34.7-34.7-15.6-34.7-34.7-34.7-34.7 15.6-34.7 34.7zm-203.8 29.8c71.2 0 129.2-57.9 129.2-129.2s-57.9-129.2-129.2-129.2c-71.3.1-129.2 58-129.2 129.2s57.9 129.2 129.2 129.2z"/><path d="M144.2 198.4c62.4 0 113.2 50.8 113.2 113.2 0 62.4-50.8 113.2-113.2 113.2C81.8 424.7 31 373.9 31 311.5c0-62.3 50.8-113.1 113.2-113.1zm-74.5 177l34.5-34.5c-6.1-8.2-9.7-18.4-9.7-29.4s3.6-21.2 9.7-29.4l-34.5-34.5C55 264.9 46 287.2 46 311.6c0 24.3 9 46.6 23.7 63.8zm109.2-63.9c0-19.1-15.6-34.7-34.7-34.7s-34.7 15.6-34.7 34.7 15.6 34.7 34.7 34.7 34.7-15.5 34.7-34.7zm-98.6-74.4l34.5 34.5c8.2-6.1 18.4-9.7 29.4-9.7s21.2 3.6 29.4 9.7l34.5-34.5c-17.2-14.8-39.5-23.7-63.9-23.7s-46.7 8.9-63.9 23.7zm138.3 10.6l-34.5 34.5c6.1 8.2 9.7 18.4 9.7 29.4s-3.6 21.2-9.7 29.4l34.5 34.5c14.8-17.2 23.7-39.5 23.7-63.9s-8.9-46.7-23.7-63.9zM208 386l-34.5-34.5c-8.2 6.1-18.4 9.7-29.4 9.7s-21.2-3.6-29.4-9.7L80.3 386c17.2 14.8 39.5 23.7 63.9 23.7s46.7-8.9 63.8-23.7z"/></svg>
,
<svg viewBox="-50 -50 612 612"><path fill="#000" d="M92.6 21c-32 0-64.04 24-64.04 72L92.6 221l64-128c0-48-32-72-64-72zm282.3 39c-6.9.29-13.6 1.6-19.2 2.8l3.8 17.6c5.6-1.25 11.4-2.04 16.3-2.4zM92.6 61c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32 0-17.67 14.33-32 32-32zm302.2.2l-3 17.7c4.9 1.03 9.8 2.32 14.1 4.9l8.7-15.8c-6.1-3.25-12.9-6.17-19.8-6.8zm-57.5 6.7c-6.1 2.38-12.2 4.51-17.4 6.6L327 91c5.5-2.34 11.3-4.38 16.2-6.1zM431 81.3L417.3 93c3.6 4.12 6.4 9.2 8.6 13.3l16.1-8.1c-3.4-6.55-6.4-11.51-11-16.9zm-127.8.9c-6.1 3.11-11.1 5.88-16.5 8.6l8.8 15.8c5.2-3 10.9-5.9 15.5-8.2zm-32.3 17.9c-5.3 3.1-10.5 6.2-15.6 9.6l9.8 15c4.9-3.2 10-6.2 15-9.2zM448.2 118c-5.9 1-11.9 1.7-17.8 2.4.4 5 .1 10.4-.9 14.6l17.5 4.1c1-7.2 1.9-14.6 1.2-21.1zm-208.1 1.7c-5 3.4-9.9 6.9-14.9 10.3l10.4 14.7c4.8-3.5 9.7-6.8 14.6-10.2zm-29.6 21.1c-5 3.6-10.2 7.6-14.5 10.9l10.9 14.3c5.5-4 9.3-7 14.3-10.7zm213 8c-3 4.6-6.5 9.2-10 12.7l13.1 12.5c4.3-5.1 8.9-10.3 12.1-15.5zm-241.8 14.1c-4.9 3.8-9.8 7.7-14.1 11.3l11.4 13.9c4.7-3.9 9.5-7.9 13.9-11.1zM401.1 173c-4.6 3.7-9.4 7.3-13.8 10.3l10.3 14.8c5.3-3.6 10.5-7.5 15-11.1zm-247.4 12.9c-4.7 3.8-9.2 7.8-13.8 11.7l11.7 13.7c4.5-3.9 9-7.8 13.6-11.6zm218.9 7c-5.1 3-10.4 6.1-15.2 8.7l8.6 15.9c5.4-3.3 11.5-6.2 16-9.2zm-246.4 16.6c-4.5 4-8.9 8-13.4 12.1l12.1 13.4c4.4-4 8.9-8 13.3-12zm215.5.4c-5.3 2.6-10.6 5.3-15.9 7.9l7.7 16.2c6.2-3 10.8-5.5 16.4-8.1zm-32 15.4c-5.5 2.5-10.8 4.9-16.4 7.2l7.3 16.5c5.5-2.4 11-4.9 16.5-7.4zM99.6 234c-5.1 4.5-8.65 8-13.3 12.5l12.7 13c4.7-4.5 8.5-8.4 12.9-12.2zm177.3 5.8c-5.5 2.3-11 4.7-16.5 7l7 16.7c5.6-2.3 11.1-4.7 16.6-7.1zm-33.1 14c-5.5 2.4-11 4.8-16.6 7l7 16.7c5.5-2.3 11.1-4.7 16.6-7zm184.8 7.2c-32 0-64 24-64 72l64 128 64-128c0-48-32-72-64-72zm-218 6.8c-5.7 2.6-11.7 5-16.6 7.1l7.1 16.6c5.9-2.5 11.5-4.9 16.5-7.1zM177.4 282c-5.4 2.5-11.7 5.3-16.5 7.5l7.4 16.4c5.9-2.6 11.1-5.2 16.3-7.4zm-33 15c-5.6 2.7-11.4 5.5-16.4 8l8.1 16.1c5.4-2.8 11-5.4 15.9-7.8zm284.2 4c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-316.8 12.3c-5.3 2.9-10.6 5.9-16 9l9 15.6c5.1-3 10.3-5.8 15.5-8.6zM80.1 332c-5.61 3.2-11.03 7.5-15.7 10.6L75.3 357c4.97-3.6 10.32-7.3 14.6-9.9zm-29.9 22.6c-4.8 4.4-9.53 9.5-13.2 13.8l13.7 11.7c3.85-4.7 7.2-8.2 11.7-12.2zm217.8 1.3l1.6 17.9c5.2-.9 10.4-.3 15.6.5l3.1-17.7c-6.6-1-13.6-1.7-20.3-.7zm-37.2 10l6.8 16.7c5.2-2.3 10.6-4.1 16.1-5.8-1.9-5.7-3.3-11.5-4.8-17.3-6.3 1.8-12.6 4.2-18.1 6.4zm77.5-.9l-10.2 14.8c4.2 3.1 8.3 6.4 11.6 10.5l13.6-11.8c-5.1-5.2-9-10.1-15-13.5zm-94.5 9c-5.5 2.8-10.8 6-16.1 9.1l9.1 15.5c5.2-2.8 10.3-6.1 15.4-8.8zM26.01 385c-3.02 6.5-5.47 13.5-6.61 19.7l17.7 3.1c1.08-5.7 2.63-9.8 4.9-14.7-5.49-2.4-10.73-5.3-15.99-8.1zm156.09 7.8c-5.1 3.3-10.1 6.6-15.1 10l10 15c5-3.3 9.9-6.7 14.9-10zm152.7 1.2l-15.1 9.8c3.2 4.8 6.3 9.8 9.2 14.9l15.6-9c-3.5-5.6-6-10.6-9.7-15.7zm-182.7 19c-5 3.3-10 6.5-14.9 10l10 15c4.8-3.5 9.9-6.8 15-10.2zm-114.8 9.5c-5.79 1.2-11.63 2.2-17.45 3.3 1.05 7 3.86 13.8 6.4 19.2l16.25-7.8c-2.17-5-4.23-10.2-5.2-14.7zm316.1 2.8l-15.6 9c3.1 5.4 6.7 11.2 9.6 15.8l15.1-9.7c-3.4-5.3-6.3-10.3-9.1-15.1zm-231 7.5c-5 3.1-9.9 6.1-15.1 9l8.9 15.7c5.3-3.1 10.6-6.2 15.7-9.5zm-71.3 16.3l-12.3 13.2c5.56 5.3 12.42 8.8 19.9 10.4l4-17.5c-4.44-.9-8.59-3.1-11.6-6.1zm41 .3c-5.01 2.3-10.21 4.1-15.6 5.2l4.1 17.6c6.42-1.3 12.46-3.7 18.5-6.2zm280.3 4.8l-13.9 11.3c4.3 5.3 9.6 10.4 14.2 14l11.1-14.2c-4.4-3.4-8.2-7.5-11.4-11.1zm24.1 17.5l-4.5 17.5c7.9 1.6 13.8 2.1 21.2 1.3l-2.2-17.9c-4.9.8-9.7.3-14.5-.9z"/></svg>
  



  ];

  const setActivity = activity => {
    console.log(activity);
    setValue("activity",activity);
  };
  const r=icons.map ( (d,i) => (
<Box m={1} key={props.activities[i+1]+i} onClick={() => setActivity(props.activities[i])}>
    <Grid container direction="column" alignItems="center">
  <Grid item>
<Fab size="large" key={i} boxShadow={0} color={current===props.activities[i] ? "primary":"default"} title={props.activities[i]}>{d}</Fab>
  </Grid>
  <Grid item>
    {t(props.activities[i])}
  </Grid>
</Grid>
    </Box>
    )
  );
  return r;
}

const Move4Nature = (props) => {
  const { t } = useTranslation();
  const { classes, form } = props;
  const activities = "walk,run,cycle,swim,roll,other".split(",");
  return (
    <>
    <Icons activities={activities} form={form}/>
    <input type="hidden" ref={form.register} name="activity" />

      <Grid item xs={12} sm={ 12 } className={classes.field}>
        <TextField
          form={form}
          min={1}
          type="number"
          step="1"
          pattern="\d+"
          name="distance"
          InputProps={{
            endAdornment: <InputAdornment position="end">km</InputAdornment>,
          }}
          required
          label={
            t("Distance") // i18next-extract-disable-line
          }
        />
      </Grid>
    </>
  );
};

export default Move4Nature;
