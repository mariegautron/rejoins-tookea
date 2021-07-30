import { Box, Dialog, Slide, Typography } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EndPopUp = ({ open, handleClose, handleClickOpen }: any) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ marginTop: 20, marginBottom: 50 }}
      >
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginBottom: 50, marginTop: 50 }}
          color="textPrimary"
        >
          🌞 C'est envoyé !
        </Typography>
        <Typography
          variant="body1"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          Tara a bien reçu ton message sur son Discord, les membres de la team
          te recontacterons. Hâte de te rencontrer !
        </Typography>
        <Typography
          variant="body2"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          En attendant, tu peux nous contacter via Marie Gautron (sur teams ou
          mail Ynov marie.gautron@ynov.com ou autre)
        </Typography>
      </Box>
    </Dialog>
  );
};

export default EndPopUp;
