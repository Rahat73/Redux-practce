import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import { useSelector } from "react-redux";
import TaskDetailsModal from "./TaskDetailsModal";
import {
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "../../redux/features/api/taskApi";
import { useState } from "react";

const MyTasks = () => {
  // const { tasks, userSpecificTasks } = useSelector((state) => state.tasksSlice);
  const { name } = useSelector((state) => state.userSlice);
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState(0);

  const [updateTask] = useUpdateTaskMutation();

  const { data } = useGetTasksQuery();

  const userSpecificTasks = data?.filter((item) => item.assignedTo === name);

  const handleDetails = (id) => {
    setTaskId(id);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} taskId={taskId} />
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTasks?.map((item) => (
          <div
            key={item._id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => handleDetails(item._id)}
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={() =>
                  updateTask({ id: item._id, data: { status: "done" } })
                }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
