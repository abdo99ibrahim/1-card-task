import React, { useState, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import AppsIcon from "@mui/icons-material/Apps";
import CardHeader from "../CardHeader/CardHeader";
import CardBody from "../CardBody/CardBody";

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
            display: "flex",
            flexDirection: "column",
            margin: "32px",
            position: "relative",
            overflowY: "auto",
            maxHeight: "calc(100% - 64px)",
            maxWidth: "1200px",
            width: "calc(100% - 64px)",
            borderRadius: "12px 12px 4px 4px",
            minHeight: "85vh",
            color:'#fff',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px',
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))',
          },
        }}
      >
        <DialogContent
          sx={{
            flex: "1 1 auto",
            overflow: "hidden",
            padding: "0px",
            backgroundColor: "rgb(24,24,24)",
          }}
        >
          <CardHeader handleClose={handleClose} />
          <CardBody />
        </DialogContent>
      </Dialog>
    </>
  );
}
