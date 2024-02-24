import { useSelector } from "react-redux";
import MyModal from "../../ui/Modal";

const TaskDetailsModal = ({ isOpen, setIsOpen, taskId }) => {
  const { task } = useSelector((state) => state.tasks);
  const taskDetails = task.find((t) => t.id === taskId);
  return (
    <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title={taskDetails?.name}>
      <p>{taskDetails?.description}</p>
    </MyModal>
  );
};

export default TaskDetailsModal;
