import React from "react";
import SidePanel from "../components/SidePanel";
import { Box } from "@mui/material";

function AdminPanel() {
  return (
    <Box sx={{direction: 'rtl'}} display={'flex'}>
      <SidePanel />
      <Box>AdminPanel</Box>
    </Box>
  );
}

export default AdminPanel;
