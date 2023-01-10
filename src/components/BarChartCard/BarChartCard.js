import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import BarChart from "../Charts/BarChart";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <BarChart />
    </CardContent>
  </React.Fragment>
);

export default function BarChartCard() {
  return (
    <Box sx={{ width: 1 / 2, height: 1 / 2 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
