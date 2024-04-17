import { Box, FormControl, Grid, IconButton, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import BoxCard from "../BoxCard";
import { useState } from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Label } from "@mui/icons-material";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext } from "@mui/lab";
import HexagonIcon from "@mui/icons-material/Hexagon";
export default function CardBody() {
  const [value, setValue] = useState("stakeholders");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ position: "relative", backgroundColor: "transparent" }}>
        <Box
          sx={{
            height: "650px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ objectFit: "cover" }}
            height="100%"
            width="100%"
            src="https://zeustra-media-properties.s3.amazonaws.com/property/a7y6e000001Eqo7AAC/a7y6e000001Eqo7AAC-2023-07-28T17%3A17%3A10.001Z.jpg"
            alt="122 E North Ave Image"
          />
        </Box>
        <Box
          sx={{
            bottom: "0px",
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(rgba(24, 24, 24, 0) 0%, rgba(24, 24, 24, 0.643) 40%, rgb(24, 24, 24) 95%) 0% 0% no-repeat padding-box padding-box",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            top: "0%",
            paddingX: "16px",
          }}
        >
          <Grid
            container
            spacing={6}
            sx={{
              paddingLeft: "24px",
              paddingRight: "24px",
              boxSizing: "border-box",
              marginTop: "-48px",
              width: "calc(100% + 48px)",
              marginLeft: "-48px",
              paddingTop: "16px",
              display: "flex",
              flexFlow: "column-reverse wrap",
              gap: "16px",
              marginBottom: "24px",
              "& .MuiGrid-item": {
                paddingLeft: "48px",
              },
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                flexBasis: "50%",
                flexGrow: "0",
                maxWidth: "50%",
                color: "#fff",
              }}
            >
              <Box
                sx={{
                  paddingY: "8px",
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                    padding: "0px",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        fontSize: "30px",
                        gap: "4px",
                        display: "flex",
                        alignItems: "center",
                        padding: "0px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      122 E North Ave
                    </Box>
                  </Box>
                </Box>
                <IconButton
                  aria-label="close"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    color: "#fff",
                    padding: "4px",
                    flex: "0 0 auto",
                    textAlign: "center",
                    borderRadius: "50%",
                    position: "relative",
                    justifyContent: "center",
                  }}
                >
                  <ContentCopyIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                    padding: "0px",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        fontSize: "28px",
                        gap: "4px",
                        display: "flex",
                        alignItems: "center",
                        padding: "0px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Pittsburgh PA 15212
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                    padding: "0px",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        fontSize: "22px",
                        gap: "4px",
                        display: "flex",
                        alignItems: "center",
                        padding: "0px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Est.1900
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "16px",
                  marginBottom: "16px",
                  flexWrap: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                  paddingTop: "8px",
                }}
              >
                <BoxCard title="Size">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      padding: "8px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "4px",
                        alignItems: "center",
                        padding: "0px",
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            gap: "4px",
                            display: "flex",
                            alignItems: "center",
                            padding: "0px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontSize: "13px",
                            color: "rgb(179, 179, 179)",
                          }}
                        >
                          12,294 sqft
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </BoxCard>
                <BoxCard title="Last Sale">
                  <Box
                    sx={{
                      display: "flex",
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: "400",
                        lineHeight: "1.5",
                        letterSpacing: "0.00938em",
                        fontSize: "15px",
                      }}
                    >
                      <span
                        style={{
                          display: "grid",
                          gridTemplateColumns: "minmax(0px, 1fr)",
                        }}
                      >
                        <span
                          style={{
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            display: "block",
                            textOverflow: "ellipsis",
                          }}
                        >
                          Sale Price N/A
                        </span>
                      </span>
                    </p>
                    <Box sx={{ marginBottom: "8px" }}>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "4px",
                          alignItems: "center",
                          padding: "0px",
                        }}
                      >
                        <Box>
                          <Box
                            sx={{
                              gap: "4px",
                              display: "flex",
                              alignItems: "center",
                              padding: "0px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              fontSize: "13px",
                            }}
                          >
                            <p
                              style={{
                                margin: "0px",
                                fontWeight: "400",
                                lineHeight: "1.5",
                                letterSpacing: "0.00938em",
                                fontSize: "13px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              10/23/1975
                            </p>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </BoxCard>
                <BoxCard title="Mortgage">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      padding: "8px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "4px",
                        alignItems: "center",
                        padding: "0px",
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            gap: "4px",
                            display: "flex",
                            alignItems: "center",
                            padding: "0px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontSize: "13px",
                            color: "rgb(179, 179, 179)",
                          }}
                        >
                          Mortgage N/A
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </BoxCard>
              </Box>
              <Box
                sx={{ paddingTop: "8px", paddingBottom: "8px", width: "100%" }}
              >
                122 E North Ave is a 12,294 Square Foot building located in
                Pittsburgh, PA. The building was built in 1900 and was last sold
                on 10/23/1975.
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                "@media (min-width: 900px)": {
                  justifyContent: "center",
                  flexBasis: "50%",
                  flexGrow: "0",
                  maxWidth: "50%",
                },
                "@media (min-width:600px)": {
                  display: "flex",
                  justifyContent: "space-between",
                  flexBasis: "50%",
                  flexGrow: "0",
                  maxWidth: "50%",
                },
                "@media (min-width:0px)": { display: "none" },
                "@media (min-width:1536px)": {
                  flexBasis: "50%",
                  flexGrow: "0",
                  maxWidth: "50%",
                },
                "@media (min-width:1200px)": {
                  flexBasis: "50%",
                  flexGrow: "0",
                  maxWidth: "50%",
                },

                boxSizing: "border-box",
                margin: "0px",
                flexDirection: "row",
                flexBasis: "50%",
                flexGrow: "0",
                maxWidth: "50%",
              }}
            >
              <Box>
                <Box>
                  <p
                    style={{
                      margin: "0px",
                      color: "rgb(236, 236, 236)",
                      fontSize: "30px",
                      paddingTop: "24px",
                      letterSpacing: "4px",
                      fontWeight: "300",
                      opacity: "0.5",
                    }}
                  >
                    OWNERSHIP
                  </p>
                </Box>
                <Box
                  sx={{
                    border: "1px solid rgba(255, 255, 255, 0)",
                    width: "500px",
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                  }}
                >
                  <Box sx={{ width: "35px", height: "35px" }}>
                    <Box sx={{ display: "flex", height: "29px" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                        }}
                      >
                        <HexagonIcon
                          sx={{ fontSize: "42px", color: "yellow" }}
                        />
                        <p
                          style={{
                            color: "black",
                            position: "absolute",
                            fontSize: "1em",
                            fontWeight: "700",
                          }}
                        >
                          3
                        </p>
                      </Box>
                    </Box>
                  </Box>
                  <p style={{ color: "#fff" }}>Highmark</p>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Typography
                    variant="span"
                    sx={{ color: "rgb(179, 179, 179)" }}
                  >
                    Ownership Type :
                  </Typography>
                  <Box sx={{ color: "#fff", overflow: "hidden" }}>User</Box>
                </Box>
                <Box
                  sx={{
                    width: "fit-content",
                    border: "1px solid rgb(255, 255, 255)",
                    borderRadius: "4px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "4px",
                      width: "fit-content",
                      padding: "4px 8px",
                      height: "32px",
                      border: "none",
                      backgroundColor: "rgb(25, 25, 25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline",
                        backgroundColor: "yellow",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                      }}
                    ></Box>
                    <Typography
                      variant="span"
                      sx={{ color: "yellow", fontWeight: "700" }}
                    >
                      1
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="wrapped label tabs example"
          sx={{
            width: "100%",
            color: "#fff",
            position: "sticky",
            top: "58px",
            left: "0px",
            backgroundColor: "inherit",
            zIndex: "9",
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0 },
            },
          }}
        >
          <Tab
            value="stakeholders"
            label="stakeholders"
            sx={{ color: "#fff" }}
            wrapped
          />
          <Tab value="contacts" sx={{ color: "#fff" }} label="contacts" />
          <Tab value="deals" sx={{ color: "#fff" }} label="deals" />
          <Tab value="activites" sx={{ color: "#fff" }} label="activites" />
          <Tab
            value="transactions"
            sx={{ color: "#fff" }}
            label="transactions"
          />
          <Tab value="occupants" sx={{ color: "#fff" }} label="occupants" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Box>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "0px",
              }}
            >
              <Box
                sx={{
                  zIndex: "9",
                  display: "flex",
                  flexWrap: "wrap",
                  paddingBottom: "8px",
                  paddingTop: "8px",
                  position: "sticky",
                  top: "102px",
                  left: "0px",
                  backgroundColor: "rgb(24, 24, 24)",
                  "@media (min-width:900px)": {
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingRight: "32px",
                  },
                  "@media (min-width:0px)": {
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    paddingRight: "16px",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    flex: "1 1 0%",
                    "@media (min-width:600px)": { paddingLeft: "40px" },
                    "@media (min-width:0px)": { paddingLeft: "16px" },
                  }}
                ></Box>
              </Box>
            </div>
          </Box>
        </TabPanel>
      </TabContext>
    </>
  );
}
