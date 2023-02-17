import styled from "@emotion/styled";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";


interface ITaskList {
  isDraggingOver: boolean;
}
const TaskList = styled.div<ITaskList>`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
`;

interface IColumnProps {
  column: { id: string; title: string; taskIds: string[] };
  tasks: {
    id: string;
    content: string;
  }[];
  index: number;
}

const Column = ({ column, tasks, index }: IColumnProps) => {
  return (
    
      
        <Container>
          <Title>{column.title}</Title>

            <Droppable droppableId={column.id} type="task">
                {(provided, snapshot) => (
                <TaskList
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    isDraggingOver={snapshot.isDraggingOver}
                >
                        <>
                        {tasks.map((task, idx) => (
                            <Task key={task.id} task={task} index={idx} />
                        ))}
                        {provided.placeholder}
                        </>
                </TaskList>
                )}
            </Droppable>

        </Container>
    
    
  );
};

export default Column;

const Container = styled.div`
  width: 20%;

  display: flex;
  flex-direction: column;

  margin: 8px;

  border: 1px solid lightgrey;
  border-radius: 2px;
`;

const Title = styled.h3`
  padding: 8px;
`;
