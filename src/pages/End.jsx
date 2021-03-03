import React from "react";
import { withRouter } from "react-router-dom";
import Header from "@components/common/Header";
import ApplyCorrect from "@src/components/main/ApplyCorrect.jsx";
import DrawCorrect from "@components/main/DrawCorrect";

const Main = ({ match }) => {
  const { path } = match;
  return (
    <>
      <Header />
      {path === "/applycorrect" ? <ApplyCorrect /> : <DrawCorrect />}
    </>
  );
};

export default withRouter(Main);
