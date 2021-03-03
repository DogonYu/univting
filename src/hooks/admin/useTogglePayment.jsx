import { useDispatch } from "react-redux";
import { togglePayment } from "@modules/admin";

const useTogglePayment = () => {
  const dispatch = useDispatch();
  const onTogglePayment = (voterId) => {
    dispatch(togglePayment({ voterId }));
  };
  return { onTogglePayment };
};

export default useTogglePayment;
