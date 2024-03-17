import { Box, IconButton, Typography } from "@mui/material";
import { Stack, X } from "phosphor-react";
import React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";

export const Contact = () => {
  const theme = useTheme();
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction={"row"}
            alignItems="center"
            justifyContent="space-between"
            spacing={3}
          >
            <Typography>Contact Info</Typography>
            <IconButton>
              <X/>
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
