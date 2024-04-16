import {
  Box,
  IconButton,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Fullscreen } from "@mui/icons-material";
import styles from "./CardHeader.module.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ReonomyLogo from "../../assets/platforms/ReonomyLogo.jpeg";
import salesforceLogo from "../../assets/platforms/SalesforceLogo.png";
import zeusFace from "../../assets/platforms/ZeusFace.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

const data = [
  { id: 0, text: "Reonomy (Live)", image: ReonomyLogo },
  { id: 1, text: "Salesforce", image: salesforceLogo },
  { id: 2, text: "Zeustra SSOT", image: zeusFace },
];

export default function CardHeader({ handleClose }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (event) => {
    setSelectedIndex(event.target.value);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + data.length) % data.length
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{width:"250px"}}></Box>
      <div className={styles.locationHeader}>
        <Tooltip
          title="122 E North Ave, Pittsburgh, Pa 15212"
          slotProps={{
            popper: {
              modifiers: [{ name: "offset", options: { offset: [0, -10] } }],
            },
          }}
        >
          <Typography variant="p" className={styles.tooltip} sx={{display:'flex',alignItems:'flex-end',justifyContent:"flex-end"}}>
            122 E North Ave, Pittsburgh, Pa 15212
          </Typography>
        </Tooltip>
      </div>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box>
          <IconButton
            onClick={handlePrev}
            sx={{ marginRight: "-12px", color: "#fff", "&:hover": {} }}
          >
            <ArrowLeftIcon />
          </IconButton>
          <Select
            value={selectedIndex}
            onChange={handleChange}
            sx={{
              width: "200px",
              top: "5px",
              height: "40px",
              color: "#fff",
              background: "#000",
              border: "2px solid rgb(179, 179, 179) !important",
              borderRadius: "25px",
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: "#000",
                  color: "#fff",
                  "& .MuiMenuItem-root": {
                    "&:hover": {
                      bgcolor: "#16202D",
                    },
                  },
                },
              },
            }}
            renderValue={(value) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "16px",
                  margin: "2px",
                }}
              >
                <img
                  src={data[value].image}
                  alt="Option"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: "2px",
                    borderRadius: "50%",
                    background: "#fff",
                    border: "2px solid rgb(179, 179, 179)",
                  }}
                />
                <span> {data[value].text}</span>
                <ArrowDropDownIcon sx={{ color: "#fff" }} />
              </div>
            )}
          >
            {data.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                <div className={styles.imageContainer}>
                  <img
                    src={option.image}
                    alt="Option"
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "white",
                      padding: "2px",
                    }}
                  />
                </div>
                <Typography>{option.text}</Typography>
              </MenuItem>
            ))}
          </Select>
          <IconButton
            onClick={handleNext}
            sx={{
              marginLeft: "-12px",
              marginRight: "15px",
              color: "#fff",
              "&:hover": {},
            }}
          >
            <ArrowRightIcon />
          </IconButton>
        </Box>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <IconButton
            aria-label="FullscreenIcon"
            className={`${styles.button} ${styles.fullscreenButton}`}
          >
            <Fullscreen />
          </IconButton>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className={`${styles.button} ${styles.closeButton}`}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
}
