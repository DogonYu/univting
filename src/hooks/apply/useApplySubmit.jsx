import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { applySubmit, applyInitialize } from "@modules/apply";

const useApplySubmit = ({ history }) => {
  const { applyResult, applyError } = useSelector(({ apply }) => ({
    applyResult: apply.applyResult,
    applyError: apply.applyError,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    if (applyResult) {
      history.push("/applycorrect");
      dispatch(applyInitialize());
    }
  }, [applyResult, history, dispatch]);
  useEffect(() => {
    if (applyError) {
      alert(JSON.stringify(applyError.result).replace(/\"/g, ""));
    }
  }, [applyError]);
  const onApplySubmit = (values) => {
    if (!values.nick) {
      alert("닉네임을 입력하지 않았습니다.");
      return;
    }
    if (!values.phone) {
      alert("핸드폰 번호를 입력하지 않았습니다.");
      return;
    }
    if (!values.gender) {
      alert("성별을 선택하지 않았습니다.");
      return;
    }
    if (!values.numberting && !values.friendting) {
      alert("번호팅을 선택하지 않았습니다.");
      return;
    }
    if (!values.accept) {
      alert("정보제공 동의를 하지 않았습니다.");
      return;
    }
    dispatch(applySubmit(values));
  };
  return { onApplySubmit };
};

export default useApplySubmit;
