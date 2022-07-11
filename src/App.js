import { Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Slidebar from "./components/Slidebar";

export default function App() {
  return (
    <Container >
      <Navbar />
      <Stack  direction="row" spacing={2} justifyContent="space-between">
      <Slidebar />
      <Feed />
      <Rightbar />
      </Stack>
    </Container>
  );
}
