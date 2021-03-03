import React from "react";
import styled from "styled-components";
import EndBackground from "@assets/img/end_background.png";

const EndSubmit = () => {
  return (
    <EndSubmitWrap>
      <div>
        <img src={EndBackground} alt="" />
        <p className="section1">
          참가해주셔서
          <br />
          감사합니다.
        </p>
        <p className="section2">뽑은 번호는 1월 30일에 발송됩니다.</p>
      </div>
    </EndSubmitWrap>
  );
};

const EndSubmitWrap = styled.div`
  margin: 0 auto;
  color: #ca415a;
  text-align: center;
  img {
    height: 100vh;
    position: relative;
  }
  p {
    width: 100%;
    text-align: center;
    position: absolute;
    font-size: 36px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .section1 {
    top: 35%;
  }
  .section2 {
    top: 55%;
    color: #707070;
    font-size: 26px;
  }
  @media screen and (max-width: 500px) {
    max-width: 100vw;
    img {
      height: 100vh;
      width: 100%;
    }
  }
`;

export default EndSubmit;
