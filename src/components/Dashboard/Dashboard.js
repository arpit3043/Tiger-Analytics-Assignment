import { Box } from "@mui/material";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import BarChartCard from "../BarChartCard/BarChartCard";
// import "./Dashboard.css";
import LineChart from "../Charts/LineChart";
import ChartCard from "../ChartCard/ChartCard";

const Dashboard = ({ chart }) => {
  console.log(chart);
  return (
    <Droppable droppableId="dashboard" type="Task">
      {(provided) => {
        return (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            sx={{
              width: 1,
              height: 1,
              padding: 0.5,
              marginRight: 3,
              backgroundColor: "primary.dark",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {chart &&
              chart.map((ch, index) => {
                return <ChartCard value={ch} />;
              })}
            {provided.placeholder}
          </Box>
        );
      }}
    </Droppable>
  );
};

export default Dashboard;
