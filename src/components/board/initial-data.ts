const initialData = {
    tasks: {
      "task-1": { id: "task-1", content: "test1" },
      "task-2": { id: "task-2", content: "test2" },
      "task-3": { id: "task-3", content: "test3" },
      "task-4": { id: "task-4", content: "test4" },
      "task-5": { id: "task-5", content: "test5" },
      "task-6": { id: "task-6", content: "test6" },
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "TODO",
        taskIds: ["task-1", "task-2"],
      },
      "column-2": {
        id: "column-2",
        title: "PROGRESS",
        taskIds: ["task-5"],
      },
      "column-3": {
        id: "column-3",
        title: "INSPECT",
        taskIds: ["task-6"],
      },
      "column-4": {
        id: "column-4",
        title: "COMPLETE",
        taskIds: ["task-4"],
      },
      "column-5": {
        id: "column-5",
        title: "ABORT",
        taskIds: ["task-3"],
      },
    },
    // Facilitate reordering of the columns
    columnOrder: ["column-1", "column-2", "column-3", "column-4", "column-5"],
  };

  
  export default initialData;

