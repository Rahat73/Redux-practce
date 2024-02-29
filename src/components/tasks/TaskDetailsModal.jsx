import { useGetTasksQuery } from "../../redux/features/api/taskApi";
import Modal from "../ui/Modal";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
  const { data: tasks } = useGetTasksQuery();

  const task = tasks.find((item) => item.id === id);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
      {task?.description}
    </Modal>
  );
};

export default TaskDetailsModal;
