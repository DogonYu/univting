import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import oc from "open-color";
import { Formik, Form, Field } from "formik";
import { object, string, boolean } from "yup";
import useApplySubmit from "@hooks/apply/useApplySubmit";
import Button from "@components/common/Button";
import WomanSvg from "@assets/svg/woman.svg";
import ManSvg from "@assets/svg/man.svg";
import NumbertingSvg from "@assets/svg/apply_numberting.svg";
import FriendtingSvg from "@assets/svg/apply_friendting.svg";

const initialValues = {
  nick: "",
  phone: "",
  gender: "",
  numberting: false,
  friendting: false,
  accept: false,
};

const validationSchema = object({
  nick: string(),
  phone: string(),
  gender: string(),
  numberTIng: boolean(),
  friendTing: boolean(),
  accept: boolean(),
});

const ApplyContent = ({ history }) => {
  const { onApplySubmit } = useApplySubmit({ history });
  return (
    <ApplyContentWrap>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onApplySubmit(values);
        }}
      >
        {({ values }) => (
          <StyledForm>
            <section>
              <h2>신청서 작성</h2>
            </section>
            <section>
              <label>닉네임을 입력해주세요.</label>
              <Field
                type="text"
                name="nick"
                placeholder="닉네임"
                autoComplete="off"
              />
            </section>
            <section>
              <label>번호를 입력해주세요.</label>
              <Field
                type="tel"
                name="phone"
                pattern="[0-9]{3}[0-9]{4}[0-9]{4}"
                placeholder="01012345678"
                autoComplete="off"
              />
            </section>
            <section>
              <label>성별을 선택해주세요!</label>
              <div className="gender-wrap">
                <StyledField
                  id="applyMale"
                  type="radio"
                  name="gender"
                  value="M"
                />
                <StyledField
                  id="applyFemale"
                  type="radio"
                  name="gender"
                  value="F"
                />
                <ManLabel
                  className={values.gender.includes("M") ? "blue" : ""}
                  htmlFor="applyMale"
                >
                  <img src={ManSvg} alt="" />
                </ManLabel>
                <WomanLabel
                  className={values.gender.includes("F") ? "red" : ""}
                  htmlFor="applyFemale"
                >
                  <img src={WomanSvg} alt="" />
                </WomanLabel>
              </div>
            </section>
            <section>
              <div className="ting-label">
                <label>어떤 번호팅에 참여하실래요?</label>
                <span>* 둘 다 가능</span>
              </div>
              <div className="ting-wrap">
                <StyledField
                  id="applyCallTing"
                  type="checkbox"
                  name="numberting"
                />
                <StyledField
                  id="applyFriendTing"
                  type="checkbox"
                  name="friendting"
                />
                <TingLabel
                  className={values.numberting ? "active red-color" : ""}
                  htmlFor="applyCallTing"
                >
                  <img src={NumbertingSvg} alt="" />
                  <div>번호팅</div>
                </TingLabel>
                <TingLabel
                  className={values.friendting ? "active blue-color" : ""}
                  htmlFor="applyFriendTing"
                >
                  <img src={FriendtingSvg} alt="" />
                  <div>베프팅</div>
                </TingLabel>
              </div>
            </section>
            <section>
              <p>개인 정보 수집 및 이용 동의</p>
              <div className="privacy-accept">
                ✓ 수집·이용하려는 개인정보의 항목 : 전화번호, 성별
                <br />✓ 개인정보를 수집·이용하려는 목적 : 서비스 운영 및 관리,
                번호 뽑기 신청자에게 유니브팅 등록자의 전화번호 제공
                <br />✓ 보유(이용)기간 : 1개월 ※ 귀하께서는 개인정보 제공 및
                활용에 거부할 권리가 있습니다. 단 위 사항을 거부하실 경우
                유니브팅 신청서를 제출하실 수 없습니다.
              </div>
              <div className="submit-wrap">
                <StyledField id="applyAccept" type="checkbox" name="accept" />
                <AcceptLabel
                  htmlFor="applyAccept"
                  className={values.accept ? "active" : ""}
                >
                  개인 정보 제공 동의
                </AcceptLabel>
                <SubmitButton
                  className={
                    values.nick &&
                    values.phone &&
                    values.gender &&
                    (values.numberting || values.friendting) &&
                    values.accept
                      ? "active-submit"
                      : ""
                  }
                  type="submit"
                >
                  제출하기
                </SubmitButton>
              </div>
            </section>
          </StyledForm>
        )}
      </Formik>
    </ApplyContentWrap>
  );
};

const ApplyContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  margin: 3rem 3rem;
  color: #ca415a;
  .active {
    background: white;
    color: black;
  }
  .blue {
    background: ${oc.indigo[2]};
  }
  .red {
    background: ${oc.red[2]};
  }
  .blue-color {
    color: ${oc.blue[2]};
  }
  .red-color {
    color: ${oc.red[2]};
  }
  .active-submit {
    background: radial-gradient(ellipse at top, #ffc2c2, transparent),
      radial-gradient(ellipse at bottom, #ffa4ce, transparent);
    color: white;
  }
  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    h2 {
      margin: 0;
      text-align: center;
      font-size: 36px;
    }
    .privacy-accept {
      font-size: 14px;
      margin-top: 1rem;
      word-break: keep-all;
      color: black;
      line-height: 1.5;
      font-family: "Noto Sans KR";
    }
  }
  section + section {
    margin-top: 2rem;
  }
  input {
    margin-top: 1rem;
    padding: 0.75rem;
    border-radius: 5px;
    outline: none;
    border: 1px solid ${oc.gray[3]};
    &::placeholder {
      color: ${oc.gray[3]};
    }
  }
  input[type="text"],
  input[type="tel"] {
    appearance: none;
  }
  .gender-wrap,
  .ting-wrap {
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    label + label {
      margin-left: 3rem;
    }
  }
  .ting-label {
    span {
      font-size: 20px;
      margin-left: 1rem;
      color: red;
    }
  }
  .submit-wrap {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    label + button {
      margin-top: 2rem;
    }
  }
  @media screen and (max-width: 500px) {
    margin: 0;
    padding: 1rem;
    max-width: 100vw;
    .gender-wrap,
    .ting-wrap {
      label + label {
        margin-left: 1.5rem;
      }
    }
    .submit-wrap {
      label + button {
        margin-top: 1.5rem;
      }
    }
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledField = styled(Field)`
  display: none;
`;

const ManLabel = styled.label`
  box-shadow: 0px 0px 6px #00000029;
  background: ${oc.gray[3]};
  outline: none;
  border-radius: 50%;
  font-size: 36px;
  cursor: pointer;
  text-align: center;
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    padding: 1rem;
    max-width: 100vw;
  }
`;

const WomanLabel = styled(ManLabel)`
  color: ${oc.red[5]};
`;

const TingLabel = styled(ManLabel)`
  border-radius: 5px;
  color: ${oc.gray[6]};
  display: flex;
  flex-direction: column;
  font-size: 24px;
  div {
    margin-top: 1rem;
  }
`;

const AcceptLabel = styled(ManLabel)`
  box-shadow: 0px 0px 6px #00000029;
  background: ${oc.gray[3]};
  color: ${oc.gray[6]};
  outline: none;
  border-radius: 5px;
  font-size: 28px;
  padding: 1rem 3rem;
  cursor: pointer;
  text-align: center;
  width: 100%;
  height: auto;
  font-family: "Noto Sans KR";
  @media screen and (max-width: 500px) {
    overflow-x: unset;
  }
`;

const SubmitButton = styled(Button)`
  font-size: 28px;
  font-family: "Noto Sans KR";
  box-shadow: 0px 0px 6px #00000029;
  border: 0;
  background: ${oc.gray[3]};
  color: ${oc.gray[6]};
`;

export default withRouter(ApplyContent);
