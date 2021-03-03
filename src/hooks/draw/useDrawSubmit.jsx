import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { drawSubmit, drawInitialize } from "@modules/draw";

const useDrawSubmit = ({ history }) => {
  const { drawResult, drawError } = useSelector(({ draw }) => ({
    drawResult: draw.drawResult,
    drawError: draw.drawError,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    if (drawResult) {
      history.push("/drawcorrect");
      dispatch(drawInitialize());
    }
  }, [drawResult, history, dispatch]);
  useEffect(() => {
    if (drawError) {
      alert(JSON.stringify(drawError.result).replace(/\"/g, ""));
    }
  }, [drawError]);
  const onDrawSubmit = (values) => {
    if (!values.name) {
      alert("이름을 입력하지 않았습니다.");
      return;
    }
    if (!values.phone) {
      alert("핸드폰 번호를 입력하지 않았습니다.");
      return;
    }
    if (values.callTing === "0" && values.friendTing === "0") {
      alert("몇 장 받을 것인지 선택하지 않았습니다.");
      return;
    }
    if (!values.accept) {
      alert("정보제공 동의를 하지 않았습니다.");
      return;
    }
    dispatch(drawSubmit(values));
  };
  return { onDrawSubmit };
};

export default useDrawSubmit;
