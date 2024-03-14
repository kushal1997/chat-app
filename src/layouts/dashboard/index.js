import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico"
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { SettingsContext } from "../../contexts/SettingsContext";
import useSettings from "../../hooks/useSettings";
const DashboardLayout = () => {
  const [selected, setSelected] = useState(0)
  const theme = useTheme();
  // console.log(theme)

  const {onToggleMode}=useSettings();
  return (
    <>
      <Box p={2} sx={{ backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0,0,0.25)", width: 100, height: "100vh" }}>
        <Stack direction={"column"} alignItems={"center"} justifyContent={'space-between'} sx={{  height: "100%" }} spacing={3}>
          <Stack alignItems={'center'} spacing={4}>
            <Box sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}>
              <img src={Logo} alt={"chat app logo"} />
            </Box>
            <Stack spacing={3} sx={{ width: 'max-content' }} direction={"column"} alignItems={"center"}>
              {
                Nav_Buttons.map((el) => (
                  el.index === selected ?
                    <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                      <IconButton sr={{ width: "max-content"}} style={{ color: theme.palette.mode === 'light' ?"#ffffff" : theme.palette.text.primary }} >{el.icon}</IconButton>

                    </Box>
                    :
                    <IconButton onClick={() => setSelected(el.index)} style={{ color: theme.palette.mode === 'light' ?"#000" : theme.palette.text.primary }}>{el.icon}</IconButton>
                ))
              }
              <Divider width={'48px'} />
              {
                selected === 3 ?
                  <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                    <IconButton sr={{ width: "max-content" }} style={{ color: theme.palette.mode === 'light' ?"#ffffff" : theme.palette.text.primary }} ><Gear /></IconButton>

                  </Box>
                  :
                  <IconButton onClick={() => setSelected(3)} style={{ color: theme.palette.mode === 'light' ?"#000" : theme.palette.text.primary }}  >
                    <Gear /> 
                  </IconButton>
              }

            </Stack>
          </Stack>

          <Stack spacing={4} alignItems={"center"}>

            <Switch defaultChecked onChange={()=>onToggleMode()}/>
            <Avatar src={faker.image.avatar()} />
          </Stack>

        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
