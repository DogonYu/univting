import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@components/common/Button";
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
        <p className="section2">
          제출해주신 전화번호는 번호 뽑기
          <br />
          신청자에게 1월 30일에 임의 발송됩니다.
        </p>
        <p className="section3">뽑기도 하시겠어요?</p>
        <Link className="section4" to="/draw">
          <ApplyButton>번호 뽑기</ApplyButton>
        </Link>
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
    top: 25%;
  }
  .section2 {
    top: 45%;
    color: #707070;
    font-size: 30px;
  }
  .section3 {
    top: 70%;
  }
  .section4 {
    text-align: center;
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    button {
      padding: 1rem 2rem;
      font-size: 26px;
    }
  }
  @media screen and (max-width: 500px) {
    max-width: 100vw;
    img {
      height: 100vh;
      width: 100%;
    }
  }
`;

const ApplyButton = styled(Button)`
  margin-top: 1.5rem;
  font-size: 30px;
  font-family: "Noto Sans KR";
  box-shadow: 0px 0px 6px #00000029;
  border: 0;
  background: radial-gradient(ellipse at top, #ffc2c2, transparent),
    radial-gradient(ellipse at bottom, #ffa4ce, transparent);
  color: white;
`;

export default EndSubmit;
