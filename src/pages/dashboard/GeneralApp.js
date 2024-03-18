import React from "react";
import { Chats } from "./Chats";
import { Box, Stack } from "@mui/material";
import { Conversation } from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Contact } from "../../components/settings/Contact";
import { ContactAbout } from "../../components/settings/ContactAbout";
import { StarredMessages } from "../../components/StarredMessages";
import { SharedMessages } from "../../components/SharedMessages";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);

  return (
    <>
      <Stack direction="row" width={"100%"}>
        <Chats />
        <Box
          sx={{
            height: "100%",
            width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F0F4FA"
                : theme.palette.background.default,
          }}
        >
          <Conversation />
        </Box>
        {sidebar.open &&
          (() => {
            switch (sidebar.type) {
              case "CONTACT":
                return <ContactAbout />;
              case "STARRED":
                return <StarredMessages />;
              case "SHARED":
                return <SharedMessages />;
              default:
                return <ContactAbout />;
            }
          })()}

        {/* {
            sidebar.open && <ContactAbout/>
          } */}
      </Stack>
    </>
  );
};

export default GeneralApp;
