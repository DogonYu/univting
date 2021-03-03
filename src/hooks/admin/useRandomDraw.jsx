import { useDispatch } from "react-redux";
import { randomDraw } from "@modules/admin";

const useRandomDraw = () => {
  const dispatch = useDispatch();
  const onRandomDraw = (voterId) => dispatch(randomDraw({ voterId }));
  return { onRandomDraw };
};

export default useRandomDraw;
