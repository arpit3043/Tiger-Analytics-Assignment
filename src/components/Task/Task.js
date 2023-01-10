import React from "react";
import "./Task.css";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ id, task, index }) => {
  return (
    <Draggable draggableId={id} index={index} type="Task" key={id}>
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="task"
          >
            {task}
          </div>
        );
      }}
    </Draggable>
  );
};

export default Task;
