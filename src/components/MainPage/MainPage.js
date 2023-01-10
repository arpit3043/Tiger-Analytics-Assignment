import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import Dashboard from "../Dashboard/Dashboard";
import DrawerHeaderBar from "../DrawerHeaderBar/DrawerHeaderBar";
import RightBar from "../rightBar/RightBar";
import { componentsData } from "../../data";

const MainPage = () => {
  const [components, setComponents] = useState(componentsData);
  const [displayChart, setDisplayChart] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("data") !== null) {
      let data = localStorage.getItem("data");
      let parsedData = JSON.parse(data);
      setDisplayChart([...parsedData]);
      console.log(parsedData);
    }
  }, []);

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      comps = components;

    if (source.droppableId === "rightBar") {
      add = comps[source.index];
      comps.splice(source.index, 1);
    }

    if (destination.droppableId === "rightBar") {
      comps.splice(destination.index, 0, add);
    }

    setComponents(comps);

    if (displayChart.length === 4) {
      displayChart.splice(0, 1);
    }

    const displayChartData = JSON.stringify(displayChart);
    localStorage.setItem("data", displayChartData);

    if (destination.droppableId === "dashboard" && draggableId === "Line") {
      setDisplayChart(["Line", ...displayChart]);
    } else if (
      destination.droppableId === "dashboard" &&
      draggableId === "Bar"
    ) {
      setDisplayChart([...displayChart, "Bar"]);
    } else if (
      destination.droppableId === "dashboard" &&
      draggableId === "Stacked"
    ) {
      setDisplayChart([...displayChart, "Stacked"]);
    } else if (
      destination.droppableId === "dashboard" &&
      draggableId === "Area"
    ) {
      setDisplayChart([...displayChart, "Area"]);
    } else if (
      destination.droppableId === "dashboard" &&
      draggableId === "GroupedBar"
    ) {
      setDisplayChart([...displayChart, "GroupedBar"]);
    } else if (
      destination.droppableId === "dashboard" &&
      draggableId === "Bubble"
    ) {
      setDisplayChart([...displayChart, "Bubble"]);
    } else if (
      destination.droppableId === "dashboard" &&
      draggableId === "Scatter"
    ) {
      setDisplayChart([...displayChart, "Scatter"]);
    } else if (
      destination.droppableId === "dashboard" &&
      draggableId === "Multitype"
    ) {
      setDisplayChart([...displayChart, "Multitype"]);
    } else if (
      destination.droppableId === "dashboard" &&
      draggableId === "HorizontalBar"
    ) {
      setDisplayChart([...displayChart, "HorizontalBar"]);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Grid container direction="row">
        <Grid container item xs="auto">
          <DrawerHeaderBar />
        </Grid>
        <Grid container item xs={9}>
          <Dashboard chart={displayChart} />
        </Grid>

        <Grid container item xs={2}>
          <RightBar components={components} setComponents={setComponents} />
        </Grid>
      </Grid>
    </DragDropContext>
  );
};

export default MainPage;
