import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import BackButton from "@assets/svg/back.svg";

const Header = ({ history }) => {
  return (
    <HeaderWrap>
      <img onClick={() => history.goBack()} src={BackButton} alt="" />
      <Link to="/">유니브팅</Link>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  width: 100%;
  height: 4rem;
  background: transparent
    radial-gradient(
      closest-side at 17% -81%,
      #feeef4 0%,
      #fff9fb 44%,
      #ffecf5 100%
    )
    0% 0% no-repeat padding-box;
  color: #ca415a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  padding: 0 3rem;
  position: relative;
  img {
    cursor: pointer;
    position: absolute;
    left: 5%;
  }
  @media screen and (max-width: 500px) {
    padding: 0 1.5rem;
    max-width: 100vw;
  }
`;

export default withRouter(Header);
