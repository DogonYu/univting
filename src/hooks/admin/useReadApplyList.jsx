import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { readApplyList } from "@modules/admin";

const useApplyList = () => {
  const { applyList, applyListLoading } = useSelector(({ admin, loading }) => ({
    applyList: admin.applyList,
    applyListLoading: loading["admin/READ_APPLY"],
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readApplyList());
  }, [dispatch]);
  return { applyList, applyListLoading };
};

export default useApplyList;
