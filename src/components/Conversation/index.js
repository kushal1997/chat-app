import {
  Box,
  Stack,
} from "@mui/material";
import React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Message } from "./Message";



export const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* chat header */}
     <Header/>

      {/* chat messages */}
      <Box width={"100%"} sx={{ flexGrow: 1 ,height:"100%",overflowY:"scroll"}}>
        <Message menu={true}/>
      </Box>

      {/* chat footer  */}
      <Footer/>
    </Stack>
  );
};
