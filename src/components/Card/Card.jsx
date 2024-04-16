import React, { useState, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import AppsIcon from "@mui/icons-material/Apps";
import CardImage from "../../assets/image.jpg";

import Overlay from "../Overlay/Overlay";
import CardHeader from "../CardHeader/CardHeader";
import { DialogTitle, Typography } from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CardComponent() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        color="secondary"
        variant="contained"
        onClick={handleClickOpen}
        startIcon={<AppsIcon />}
      >
        Open Card
      </Button>
      <Dialog
        open={open}
        fullScreen
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth="lg"
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-paper": {
            color: "rgb(255, 255, 255)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0m",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px",
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))",
            margin: "32px",
            position: "relative",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            maxHeight: "calc(100% - 64px)",
            maxWidth: "1200px",
            width: "calc(100% - 64px)",
            borderRadius: "12px 12px 4px 4px",
            minHeight: "85vh",
          },
        }}
      >
        <div 
    style={{ 
      position: 'absolute',
      top: 0, 
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${CardImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'left',
    }}
  />
    <Overlay/>
        <DialogTitle>
        <CardHeader handleClose={handleClose} />
        </DialogTitle>
        <DialogContent style={{ marginTop: "150px", zIndex: "2", color: "#fff"  }}>
            <Typography variant="h5" style={{ marginBottom: "10px" }}>
              122 E North Ave
            </Typography>
            <Typography variant="h5">Pittsburgh PA 15212</Typography>
            <Typography variant="h6">Est.1900</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};
