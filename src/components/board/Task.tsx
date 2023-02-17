import styled from "@emotion/styled";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

interface IContainer {
  isDragging: boolean;
}

interface ITaskProps {
  task: {
    id: string;
    content: string;
  };
  index: number;
}

const Task = ({ task, index }: ITaskProps) => {

  return (
    <Draggable
      draggableId={task.id}
      index={index}
    >
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
    
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default React.memo(Task);

const Container = styled.div<IContainer>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
      props.isDragging
      ? "lightgreen"
      : "white"};
`;