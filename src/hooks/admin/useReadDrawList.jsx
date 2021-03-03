import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { readDrawList } from "@modules/admin";

const useDrawList = () => {
  const { drawList, drawListLoading } = useSelector(({ admin, loading }) => ({
    drawList: admin.drawList,
    drawListLoading: loading["admin/READ_DRAW"],
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readDrawList());
  }, [dispatch]);
  return { drawList, drawListLoading };
};

export default useDrawList;
