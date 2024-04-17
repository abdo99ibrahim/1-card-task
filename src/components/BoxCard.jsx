import { Box, Typography } from "@mui/material";

export default function BoxCard({ title, children }) {
  return (
    <Box
      sx={{
        maxWidth: "180px",
        minHeight: "85px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: "8px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        background: "0% 0% no-repeat padding-box padding-box rgb(24, 24, 24)",
        borderRadius: "4px",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          margin: "0px",
          fontWeight: "700",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "rgb(240, 199, 85)",
          padding: "8px",
        }}
      >
        {title}
      </p>
      {children}
    </Box>
  );
}
