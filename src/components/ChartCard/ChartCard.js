import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import LineChart from "../Charts/LineChart";
import BarChart from "../Charts/BarChart";
import StackedChart from "../Charts/StackedChart";
import PieChart from "../Charts/PieChart";
import AreaChart from "../Charts/AreaChart";
import BubbleChart from "../Charts/BubbleChart";
import ScatterChart from "../Charts/ScatterChart";
import MultitypeChart from "../Charts/MultitypeChart";
import GroupedBarChart from "../Charts/GroupedBarChart";
import HorizontalBarChart from "../Charts/HorizontalBarChart";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

// const card = (
//   <React.Fragment>
//     <CardContent>
//     {value === "Line" ? <LineChart /> : "No graph to print"}
//           {value === "Bar" ? <BarChart /> : "No graph to print"}
//     </CardContent>
//   </React.Fragment>
// );

export default function ChartCard({ value }) {
  console.log(value);
  return (
    <Box sx={{ width: 1 / 2, height: 1 / 2 }}>
      <Card variant="outlined">
        <CardContent>
          {value === "Line" ? <LineChart /> : null}
          {value === "Bar" ? <BarChart /> : null}
          {value === "Stacked" ? <StackedChart /> : null}
          {value === "GroupedBar" ? <GroupedBarChart /> : null}
          {value === "Area" ? <AreaChart /> : null}
          {value === "Bubble" ? <BubbleChart /> : null}
          {value === "Scatter" ? <ScatterChart /> : null}
          {value === "Multitype" ? <MultitypeChart /> : null}
          {value === "HorizontalBar" ? <HorizontalBarChart /> : null}
        </CardContent>
      </Card>
    </Box>
  );
}
