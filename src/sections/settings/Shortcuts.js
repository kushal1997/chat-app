import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, Slide, Typography } from "@mui/material";
import { Stack } from "phosphor-react";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const list = [
  {
    key: 0,
    title: "Mark as unread",
    combination: ["Cmd", "Shift", "U"],
  },
  {
    key: 1,
    title: "Mute",
    combination: ["Cmd", "Shift", "M"],
  },
];
export const Shortcuts = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        keepMounted
        TransitionComponent={Transition}
        sx={{ p: 4 }}
      >
        <DialogTitle>Keyboard Shortcuts</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            {list.map(({ key, title, combination }) => (
              <Box key={key}>
                <Grid item xs={6}>
                  <Stack sx={{ width: "100%" }} justifyContent="space-between" spacing={3} direction={"row"} alignItems={"center"}>
                    <Typography variant="caption" sx={{fontSize:14}}>
                      {title}
                    </Typography>
                    <Stack spacing={2} direction={"row"}>
{
  combination.map((el)=>{
    return (
      <Button disabled variant="contained" sx={{color:"#212121"}}>
        {el}
      </Button>
    )
  })
}
                    </Stack>
                  </Stack>
                </Grid>
              </Box>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};
