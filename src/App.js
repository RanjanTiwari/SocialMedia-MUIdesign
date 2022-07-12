
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Slidebar from "./components/Slidebar";

export default function App() {

  const [mode, setMode] = useState("light")

  const darkTheme = createTheme ({
    palette:{
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack  direction="row" spacing={2} justifyContent="space-between">
      <Slidebar setMode={setMode} mode={mode}/>
      <Feed />
      <Rightbar />
      </Stack>
      <Add />
      </Box>
      </ThemeProvider>
  );
}
