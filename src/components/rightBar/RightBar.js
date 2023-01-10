import React from "react";
// import "./RightBar.css";
import Task from "../Task/Task";
import { Droppable } from "react-beautiful-dnd";
import { Box, Tab, Typography } from "@mui/material";

const RightBar = ({ components, setComponents }) => {
  return (
    <Box
      sx={{
        width: 300,
        height: 620,
        border: "2px solid whitesmoke",
        borderRadius: 5,
        padding: 2,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h2" mb={2}>
        <Tab
          value="charts"
          label="Charts"
          sx={{ border: "2px solid grey", borderRadius: 2 }}
        />
      </Typography>
      <Droppable droppableId="rightBar" type="Task">
        {(provided) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="dataList"
            >
              {components.map((data, index) => {
                return (
                  <Task
                    key={index}
                    id={data.id}
                    task={data.content}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </Box>
  );
};

export default RightBar;
