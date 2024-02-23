import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserTask } from "../../redux/features/tasks/tasksSlice";

const MyTasks = () => {
  const { task, userSpecificTask } = useSelector((state) => state.tasks);
  const { name: userName } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserTask(userName));
  }, [userName, dispatch, task]);

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTask.map((t) => (
          <div
            key={t.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{t.name}</h1>
            <div className="flex gap-3">
              <button className="grid place-content-center" title="Details">
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button className="grid place-content-center" title="Done">
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
