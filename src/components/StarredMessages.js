import {
    Box,
    Grid,
    IconButton,
    Stack,
    Tab,
    Tabs,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { styled, alpha, useTheme } from "@mui/material/styles";
  import { useDispatch } from "react-redux";
  import { ToggleSidebar, UpdateSidebarType } from "../redux/slices/app";
  import { CaretLeft, X } from "phosphor-react";
  import { faker } from "@faker-js/faker";
  import { SHARED_DOCS, SHARED_LINKS } from "../data";
  import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";
import { Message } from "./Conversation/Message";

export const StarredMessages = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    
    return (
      <Box sx={{ width: 320, height: "100vh" }}>
        <Stack sx={{ height: "100%" }}>
          {/* Header */}
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
              spacing={3}
            >
              <IconButton onClick={() => dispatch(UpdateSidebarType("CONTACT"))}>
                <CaretLeft />
              </IconButton>
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>
          </Box>
  
          {/* Body */}
          <Stack
            sx={{
              height: "100%",
              position: "relative",
              flexGrow: 1,
              overflowY: "scroll",
            }}
            p={3}
            spacing={ 3}
          >
           <Message/>
          </Stack>
        </Stack>
      </Box>
    );
  };
  