import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import oc from "open-color";
import { Formik, Form, Field } from "formik";
import { object, string, boolean } from "yup";
import useDrawSubmit from "@hooks/draw/useDrawSubmit";
import Button from "@components/common/Button";
import WomanSvg from "@assets/svg/woman.svg";
import ManSvg from "@assets/svg/man.svg";

const initialValues = {
  name: "",
  phone: "",
  gender: "",
  numbertingNo: "0",
  friendtingNo: "0",
  accept: false,
};

const validationSchema = object({
  name: string(),
  phone: string(),
  gender: string(),
  callTing: string(),
  friendTing: string(),
  accept: boolean(),
});

const DrawContent = ({ history }) => {
  const { onDrawSubmit } = useDrawSubmit({ history });
  return (
    <DrawContentWrap>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onDrawSubmit(values);
        }}
      >
        {({ values }) => (
          <StyledForm>
            <section>
              <h2>신청서 작성</h2>
            </section>
            <section>
              <label>번호를 뽑는 방법 안내</label>
              <p className="description">
                1. 1인당 번호팅, 베프팅 각 5개씩 가능해요! (최대 10장)
                <br />
                2. 3333-11-7939877 카카오뱅크 한아름으로
                <br />
                장수 x 1000원을 입금해주세요! (수익금의 일부는 충남지역 보육원에
                기부됩니다.)
                <br />
                3. 아래 설문지를 전부 작성하고 제출합니다.
                <br />
                4. 1월 30일에 문자 메시지를 확인해주세요!
              </p>
            </section>
            <section>
              <label>이름이 어떻게 되세요?</label>
              <Field
                type="text"
                name="name"
                placeholder="이름"
                autoComplete="off"
              />
            </section>
            <section>
              <label>번호가 어떻게 되세요?</label>
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
              <label>번호팅은 몇 장을 뽑으실래요?</label>
              <div className="ting-wrap">
                {/* <SelectField component="select" name="numbertingNo">
                  <option value="0" label="0장" />
                  <option value="1" label="1장" />
                  <option value="2" label="2장" />
                  <option value="3" label="3장" />
                  <option value="4" label="4장" />
                  <option value="5" label="5장" />
                </SelectField> */}
                <div>
                  <div>
                    <Field
                      id="numberting-0"
                      type="radio"
                      name="numbertingNo"
                      value="0"
                    />
                    <label htmlFor="numberting-0">0장</label>
                  </div>
                  <div>
                    <Field
                      id="numberting-1"
                      type="radio"
                      name="numbertingNo"
                      value="1"
                    />
                    <label htmlFor="numberting-1">1장</label>
                  </div>
                  <div>
                    <Field
                      id="numberting-2"
                      type="radio"
                      name="numbertingNo"
                      value="2"
                    />
                    <label htmlFor="numberting-2">2장</label>
                  </div>
                </div>
                <div>
                  <div>
                    <Field
                      id="numberting-3"
                      type="radio"
                      name="numbertingNo"
                      value="3"
                    />
                    <label htmlFor="numberting-3">3장</label>
                  </div>
                  <div>
                    <Field
                      id="numberting-4"
                      type="radio"
                      name="numbertingNo"
                      value="4"
                    />
                    <label htmlFor="numberting-4">4장</label>
                  </div>
                  <div>
                    <Field
                      id="numberting-5"
                      type="radio"
                      name="numbertingNo"
                      value="5"
                    />
                    <label htmlFor="numberting-5">5장</label>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <label>베프팅은 몇 장을 뽑으실래요?</label>
              <div className="ting-wrap">
                <div>
                  <div>
                    <Field
                      id="friendting-0"
                      type="radio"
                      name="friendtingNo"
                      value="0"
                    />
                    <label htmlFor="friendting-0">0장</label>
                  </div>
                  <div>
                    <Field
                      id="friendting-1"
                      type="radio"
                      name="friendtingNo"
                      value="1"
                    />
                    <label htmlFor="friendting-1">1장</label>
                  </div>
                  <div>
                    <Field
                      id="friendting-2"
                      type="radio"
                      name="friendtingNo"
                      value="2"
                    />
                    <label htmlFor="friendting-2">2장</label>
                  </div>
                </div>
                <div>
                  <div>
                    <Field
                      id="friendting-3"
                      type="radio"
                      name="friendtingNo"
                      value="3"
                    />
                    <label htmlFor="friendting-3">3장</label>
                  </div>
                  <div>
                    <Field
                      id="friendting-4"
                      type="radio"
                      name="friendtingNo"
                      value="4"
                    />
                    <label htmlFor="friendting-4">4장</label>
                  </div>
                  <div>
                    <Field
                      id="friendting-5"
                      type="radio"
                      name="friendtingNo"
                      value="5"
                    />
                    <label htmlFor="friendting-5">5장</label>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div>결제 정보</div>
              <p className="description">
                ✓ 입금 할 금액 :{" "}
                {(parseInt(values.numbertingNo, 10) +
                  parseInt(values.friendtingNo, 10)) *
                  1000}
                원<br />
                <br />✓ 입금 계좌 : 3333-11-7939877 카카오뱅크 한아름
                <br />
                <br />※ 유의사항 : 뽑기 신청서에 작성하신 이름과 입금자 이름이
                일치해야합니다. 개인정보(이름, 전화번호)는 번호팅 매칭 및
                입금자명 확인에 사용되며 1개월 동안 보관 후 자동 파기됩니다.
              </p>
              <div className="accept-head">개인정보 수집 및 이용 동의</div>
              <p className="description">
                ✓ 수집·이용하려는 개인정보의 항목 : 전화번호, 이름
                <br />✓ 개인정보를 수집·이용하려는 목적 : 서비스 운영 및 관리,
                번호 전송, 입금자 이름 확인
                <br />✓ 보유(이용)기간 : 1개월
                <br />
                <br />※ 귀하께서는 개인정보 제공 및 활용에 거부할 권리가
                있습니다. 단 위 사항을 거부하실 경우 번호 뽑기 신청서를 제출하실
                수 없습니다.
              </p>
              <div className="submit-wrap">
                <StyledField id="drawAccept" type="checkbox" name="accept" />
                <AcceptLabel
                  htmlFor="drawAccept"
                  className={values.accept ? "active" : ""}
                >
                  동의하기
                </AcceptLabel>
                <SubmitButton
                  className={
                    values.name &&
                    values.phone &&
                    values.callTing !== "0" &&
                    values.friendTing !== "0" &&
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
    </DrawContentWrap>
  );
};

const DrawContentWrap = styled.div`
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
  .accept-head {
    margin-top: 2rem;
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
  .gender-wrap,
  .ting-wrap {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    color: black;
    div + div,
    label + label {
      margin-left: 3rem;
    }
    input + label {
      margin-left: 0.5rem;
    }
    button + button {
      margin-left: 3rem;
    }
    input {
      margin-top: 0;
    }
  }
  input[type="text"],
  input[type="tel"] {
    appearance: none;
  }
  input[type="radio"],
  input[type="radio"]:checked {
    appearance: none;
    border-radius: 100%;
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 0.1rem;
  }
  input[type="radio"] {
    background-color: white;
    border: 2px solid ${oc.gray[3]};
  }
  input[type="radio"]:checked {
    background-color: ${oc.blue[5]};
  }
  .ting-wrap div {
    display: flex;
    justify-content: space-between;
  }
  .ting-wrap div div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .submit-wrap {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    label + button {
      margin-top: 2rem;
    }
  }
  .description {
    margin-top: 1rem;
    word-break: keep-all;
    font-size: 16px;
    color: black;
    font-family: "Noto Sans KR";
    line-height: 1.5;
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
    .ting-wrap {
      display: block;
      div {
        flex: 0 0 auto;
      }
      div + div {
        margin-left: 0;
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

export default withRouter(DrawContent);
