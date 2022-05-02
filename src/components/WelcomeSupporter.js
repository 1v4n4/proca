import useData from "@hooks/useData";
import { setCookie } from "@lib/cookie";
import { useTranslation } from "react-i18next";
import { Button, Box } from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import RegisteredIcon from '@material-ui/icons/HowToReg';
// not you? import NotInterestedIcon from '@material-ui/icons/NotInterested';

const WelcomeSupporter = (props) => {
  const [data,setData] = useData();
  const { t } = useTranslation();
  if (!data.uuid) return null;
  const forgetMe = () => {
    setData("uuid",null);
    setData("firstname","");
    setCookie("proca_uuid","");
    setCookie("proca_firstname","");
  };

  return (
    <Box mb={2}>
    <Alert severity="info" className='supporter'
    icon={<RegisteredIcon fontSize="inherit" />}
      action={
    <Button onClick = {forgetMe} color="inherit" size="small">
        {t("supporter.not_you","not you?")}
    </Button>
  }
    >
    {t("supporter.welcome", {defaultValue: "Welcome back {{firstname}}!",firstname:data.firstname})}
    </Alert>
  </Box>)
}

export default WelcomeSupporter;
