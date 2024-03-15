import React from "react";
import { Chats } from "./Chats";
import { Box, Stack } from "@mui/material";
import { Conversation } from "../../components/Conversation";
import {useTheme } from "@mui/material/styles";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <>
      <Stack direction="row" width={"100%"}>
        <Chats />
        <Box
          sx={{
            height: "100%", width: "80%", backgroundColor: theme.palette.mode === 'light' ? "#F0F4FA" : theme.palette.background.default
          }}
        >
          <Conversation/>
        </Box>
      </Stack>
    </>
  );
};

export default GeneralApp;
