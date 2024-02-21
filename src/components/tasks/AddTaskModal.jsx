import { useForm } from "react-hook-form";
import MyModal from "../../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasks";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };
  return (
    <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Task"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            {...register("name")}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            type="text"
            {...register("description")}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            {...register("date")}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="assignedTo">Assign to</label>
          <select
            id="assignedTo"
            {...register("assignedTo")}
            className="w-full rounded-lg"
          >
            <option value={"Shakib"}>Shakib</option>
            <option value={"Tamim"}>Tamim</option>
            <option value={"Mushi"}>Mushi</option>
            <option value={"Riyad"}>Riyad</option>
            <option value={"Fizz"}>Fizz</option>
            <option value={"Litton"}>Litton</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="priority">Assign to</label>
          <select
            id="priority"
            {...register("priority")}
            className="w-full rounded-lg"
          >
            <option defaultValue value={"high"}>
              High
            </option>
            <option value={"medium"}>Medium</option>
            <option value={"low"}>Low</option>
          </select>
        </div>
        <div className="flex justify-end gap-3">
          <button onClick={onCancel} type="button" className="btn btn-danger">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </MyModal>
  );
};

export default AddTaskModal;
