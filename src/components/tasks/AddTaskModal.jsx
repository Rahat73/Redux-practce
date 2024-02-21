import MyModal from "../../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  return (
    <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Task"}>
      <p className="text-sm text-gray-500">
        Your payment has been successfully submitted. We’ve sent you an email
        with all of the details of your order.
      </p>
    </MyModal>
  );
};

export default AddTaskModal;
