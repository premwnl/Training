import { useState } from "react";
import "../../Styles/dashboard.js";
import { DragArea } from "../DragArea.js";
import { DropArea } from "../DropArea.js";
import { MobileArea } from "../MobileArea.js";
import { Layout } from "../Layout/Layout.js";
import { Stack, Typography } from "@mui/material";

export const DashBoard = () => {
  const [drop, setDrop] = useState([]);
  const name = new URLSearchParams(window.location.search);
  return (
    <Layout location={"dashboard"}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: 40 }}
      >
        <Typography variant="h5" component={"div"} color="initial">
          {name.get("filename")}
        </Typography>
      </Stack>
      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ height: 828, bgcolor: "#52AB98" }}
        direction={"row"}
        p={6}
        spacing={6}
      >
        <DragArea />
        <DropArea drop={drop} setDrop={setDrop} />
        <MobileArea drop={drop} />
      </Stack>
    </Layout>
  );
};
