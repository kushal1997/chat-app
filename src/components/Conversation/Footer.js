import React from 'react'
import { faker } from "@faker-js/faker";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
    CaretDown,
    LinkSimple,
    MagnifyingGlass,
    PaperPlaneTilt,
    Phone,
    Smiley,
    VideoCamera,
  } from "phosphor-react";
import { styled, alpha, useTheme } from "@mui/material/styles";

const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-Input": {
      paddingTop: "5px",
      paddingButtom: "5px,",
    },
  }));
  const ChatInput =()=>{
    return (
        <StyledInput
            fullWidth
            placeholder="Write a message ..."
            variant="filled"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <LinkSimple />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <Smiley />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
    )
  }
export const Footer = () => {
    const theme = useTheme();
  return (
    <Box
        p={2}
        sx={{
          width: "100%",
          backgroundColor: theme.palette.mode === 'light' ? "#F8FAFF" : theme.palette.background.paper ,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          {/* chat input */}
          <ChatInput/>
          <Box
            sx={{
              height: 48,
              width: 48,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
            }}
          >
            <Stack
              sx={{
                height: "100%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton>
                <PaperPlaneTilt />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
  )
}
