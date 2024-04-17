import {
  Box,
  Grid,
  IconButton,
  Select,
  Tooltip,
  Typography,
  MenuItem,
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
        "@media (min-width: 1200px)": {
          paddingLeft: "40px",
          paddingRight: "40px",
        },
        "@media (min-width:0px)": {
          paddingLeft: "16px",
          paddingRight: "16px",
        },
        width: "100%",
        position: "absolute",
        top: "0px",
        left: "0px",
        background:
          "linear-gradient(360deg, rgba(24, 24, 24, 0) 0%, rgb(24, 24, 24) 100%) 0% 0% no-repeat padding-box padding-box transparent",
        zIndex: "99",
        paddingTop: "16px",
        paddingBottom: "16px",
        "& .MuiGrid-item": {
          paddingLeft: "8px",
          paddingTop: "8px",
        },
      }}
    >
      <Grid
        container
        spacing={1}
        sx={{
          boxSizing: "border-box",
          display: "flex",
          flexFlow: "wrap",
          marginTop: "-8px",
          width: "calc(100% + 8px)",
          marginLeft: "-8px",
          justifyContent: "space-between",
        }}
      >
        <Grid
          sx={{
            boxSizing: "border-box",
            margin: "0px",
            flexDirection: "row",
            flexBasis: "33.3333%",
            flexGrow: "0",
            maxWidth: "33.3333%",
          }}
        ></Grid>
        <Grid
          sx={{
            boxSizing: "border-box",
            margin: "0px",
            flexDirection: "row",
            flexBasis: "33.3333%",
            flexGrow: "0",
            maxWidth: "33.3333%",
          }}
        >
          <Box
            sx={{
              width: "fit-content",
              maxWidth: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(0, 0, 0)",
              borderRadius: "12px",
            }}
          >
            <Tooltip
              title="122 E North Ave, Pittsburgh, Pa 15212"
              slotProps={{
                popper: {
                  modifiers: [
                    { name: "offset", options: { offset: [0, -10] } },
                  ],
                },
              }}
            >
              <Typography
                variant="p"
                className={styles.tooltip}
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                  width: "max-content",
                }}
              >
                122 E North Ave, Pittsburgh, Pa 15212
              </Typography>
            </Tooltip>
          </Box>
        </Grid>
        <Grid
          sx={{
            boxSizing: "border-box",
            margin: "0px",
            flexDirection: "row",
            flexBasis: "33.3333%",
            flexGrow: "0",
            maxWidth: "33.3333%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "8px",
              paddingLeft: "0px",
              paddingRight: "0px",
              borderRadius: "12px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowLeftIcon
                onClick={handlePrev}
                sx={{
                  "@media (min-width: 900px)": { marginRight: "0px" },
                  "@media (min-width:0px)": { marginRight: "-6px" },
                  userSelect: "none",
                  width: "1em",
                  height: "1em",
                  display: "inline-block",
                  fill: "currentcolor",
                  flexShrink: "0",
                  transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.5)",
                  },
                }}
              />
              <Select
                value={selectedIndex}
                onChange={handleChange}
                sx={{
                  "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                    {
                      paddingRight: "5px !important",
                      paddingLeft: "1px !important",
                    },
                  height: "32px",
                  display: "flex",
                  color: "#fff",
                  background: "#000",
                  border: "2px solid rgb(179, 179, 179) !important",
                  borderRadius: "16px"
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
                      paddingRight: "0px",
                    }}
                  >
                    <img
                      src={data[value].image}
                      alt="Option"
                      style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "10px",
                        borderRadius: "50%",
                        background: "#fff",
                        border: "2px solid rgb(179, 179, 179)",
                      }}
                    />
                    <span> {data[value].text}</span>
                    <ArrowDropDownIcon
                      sx={{ color: "#fff", zIndex: "22", marginLeft: "10px" }}
                    />
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
              <ArrowRightIcon
                onClick={handleNext}
                sx={{
                  "@media (min-width: 900px)": { marginRight: "0px" },
                  "@media (min-width:0px)": { marginRight: "-6px" },
                  userSelect: "none",
                  width: "1em",
                  height: "1em",
                  display: "inline-block",
                  fill: "currentcolor",
                  flexShrink: "0",
                  transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.5)",
                  },
                }}
              />
            </Box>
            <IconButton
              aria-label="FullscreenIcon"
              sx={{
                padding: "4px",
                backgroundColor: "rgb(0, 0, 0)",
                border: "2px solid rgb(179, 179, 179)",
                borderRadius: "50%",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgb(19 25 32)",
                },
              }}
            >
              <Fullscreen />
            </IconButton>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                padding: "4px",
                backgroundColor: "rgb(0, 0, 0)",
                border: "2px solid rgb(179, 179, 179)",
                borderRadius: "50%",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgb(19 25 32)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
