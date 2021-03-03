import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import oc from "open-color";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@components/common/Button";
import MainBackground from "@assets/img/main_background.png";
import Human1 from "@assets/svg/main_human1.svg";
import Human2 from "@assets/img/main_human2.png";
import Human3 from "@assets/img/main_human3.png";
import StartQuote from "@assets/svg/start_quote.svg";
import EndQuote from "@assets/svg/end_quote.svg";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

const MainContent = () => {
  useEffect(() => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    var windowHeight = window.innerHeight;
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    var styleZindex = 999;
    var styleTop = new Array([]);
    var styleLeft = new Array([]);
    var yuragi = new Array([]);
    var sokudo = new Array([]);
    var hanabiraId = new Array([]);
    var yuragiConut = new Array([]);
    var kazeCount = 0;
    for (var i = 0; i < 30; i++) {
      var divHanabira = document.createElement("div");
      divHanabira.id = "hanabira" + i;
      styleTop[i] = Math.random() * -1000 + scroll;
      styleLeft[i] = Math.random() * window.innerWidth - 20;
      divHanabira.setAttribute(
        "style",
        "z-index:" +
          styleZindex-- +
          ";top:" +
          styleTop[i] +
          "px;left:" +
          styleLeft[i] +
          "px;"
      );
      var hanabiraClass = "hana y" + (Math.floor(Math.random() * 2) + 1);
      divHanabira.setAttribute("class", hanabiraClass);
      document.getElementById("sakura").appendChild(divHanabira);
      yuragi[i] = Math.random() * 40 + 5;
      sokudo[i] = Math.random() * 5 + 2;
      hanabiraId[i] = document.getElementById("hanabira" + i);
      yuragiConut[i] = 0;
    }
    setInterval(function () {
      for (var i = 0; i < 30; i++) {
        if (styleTop[i] < scroll + windowHeight + 30) {
          if (yuragi[i] >= yuragiConut[i]) {
            styleLeft[i] = styleLeft[i] + 0.5 + Math.random() * 0.5;
          } else {
            styleLeft[i] = styleLeft[i] - 0.5 - Math.random() * 0.5;
          }
          if (yuragi[i] * 2 <= yuragiConut[i]) {
            yuragiConut[i] = 0;
          }
        } else {
          styleTop[i] = scroll - 40;
          styleLeft[i] = Math.random() * window.innerWidth;
        }
        if (kazeCount >= 100 && kazeCount <= 110) {
          styleLeft[i] = styleLeft[i] + 1;
        } else if (kazeCount >= 111 && kazeCount <= 120) {
          styleLeft[i] = styleLeft[i] + 3;
        } else if (kazeCount >= 121 && kazeCount <= 129) {
          styleLeft[i] = styleLeft[i] + 5;
        } else if (kazeCount >= 130 && kazeCount <= 137) {
          styleLeft[i] = styleLeft[i] + 7;
        } else if (kazeCount >= 138 && kazeCount <= 144) {
          styleLeft[i] = styleLeft[i] + 9;
        } else if (kazeCount >= 145 && kazeCount <= 300) {
          styleLeft[i] = styleLeft[i] + 11;
        } else if (kazeCount >= 301 && kazeCount <= 311) {
          styleLeft[i] = styleLeft[i] + 9;
        } else if (kazeCount >= 312 && kazeCount <= 322) {
          styleLeft[i] = styleLeft[i] + 7;
        } else if (kazeCount >= 323 && kazeCount <= 335) {
          styleLeft[i] = styleLeft[i] + 5;
        } else if (kazeCount >= 336 && kazeCount <= 349) {
          styleLeft[i] = styleLeft[i] + 3;
        } else if (kazeCount >= 350 && kazeCount <= 354) {
          styleLeft[i] = styleLeft[i] + 1;
        } else if (kazeCount >= 500 && kazeCount <= 510) {
          styleLeft[i] = styleLeft[i] - 1;
        } else if (kazeCount >= 511 && kazeCount <= 520) {
          styleLeft[i] = styleLeft[i] - 3;
        } else if (kazeCount >= 521 && kazeCount <= 529) {
          styleLeft[i] = styleLeft[i] - 5;
        } else if (kazeCount >= 530 && kazeCount <= 537) {
          styleLeft[i] = styleLeft[i] - 7;
        } else if (kazeCount >= 538 && kazeCount <= 544) {
          styleLeft[i] = styleLeft[i] - 9;
        } else if (kazeCount >= 545 && kazeCount <= 700) {
          styleLeft[i] = styleLeft[i] - 11;
        } else if (kazeCount >= 701 && kazeCount <= 711) {
          styleLeft[i] = styleLeft[i] - 9;
        } else if (kazeCount >= 712 && kazeCount <= 722) {
          styleLeft[i] = styleLeft[i] - 7;
        } else if (kazeCount >= 723 && kazeCount <= 735) {
          styleLeft[i] = styleLeft[i] - 5;
        } else if (kazeCount >= 736 && kazeCount <= 749) {
          styleLeft[i] = styleLeft[i] - 3;
        } else if (kazeCount >= 750 && kazeCount <= 754) {
          styleLeft[i] = styleLeft[i] - 1;
        } else if (kazeCount >= 900) {
          kazeCount = 0;
        }
        styleTop[i] = styleTop[i] + sokudo[i];
        hanabiraId[i].style.top = styleTop[i] + "px";
        // hanabiraId[i].style.left = styleLeft[i] + "px";
        yuragiConut[i]++;
      }
      kazeCount++;
    }, 50);
  }, []);
  return (
    <MainContentWrap id="sakura">
      <div className="main-bg">
        <img src={MainBackground} alt="" />
      </div>
      <div className="intro">
        <p>대학교 교내에서 새로운 만남을...</p>
        <h1>유니브팅</h1>
        <img src={Human1} alt="" />
      </div>
      <div className="action-wrap">
        <Link to="/apply">
          <ApplyButton>신청하기</ApplyButton>
        </Link>
        <Link to="/draw">
          <DrawButton>번호뽑기</DrawButton>
        </Link>
      </div>
      <div className="review">
        <h2>번호팅 선배들의 이야기</h2>
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <ReviewCard>
                <p>
                  <img className="start-quote" src={StartQuote} alt="" />
                  <span />
                  코로나 때문에 외롭고 심심해서, 친구 만들어 보려고 번호팅을
                  해봤는데, 덕분에 XX이랑 잘 만나고 있어요! 특별한 인연 맺게
                  해주셔서 감사합니다.
                  <img
                    className="end-quote"
                    src={EndQuote}
                    align="right"
                    alt=""
                  />
                </p>
                <div>순천향대 한X규님</div>
              </ReviewCard>
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard>
                <p>
                  <img className="start-quote" src={StartQuote} alt="" />
                  <span />
                  새내기 신입생 때 친구 만들 수 있을까 걱정했는데, 번호팅으로
                  여러 친구들과 어울리면서 사람 사귀는 법도 트고 걱정과 달리
                  인싸가 되었습니다! ㅋㅋ
                  <img
                    className="end-quote"
                    src={EndQuote}
                    align="right"
                    alt=""
                  />
                </p>
                <div>순천향대 김X혁님</div>
              </ReviewCard>
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard>
                <p>
                  <img className="start-quote" src={StartQuote} alt="" />
                  <span />
                  방학 때 학교에서 롤 친구, 술 친구가 없어 베프팅을 해봤는데,
                  좋은 친구들도 만나고 여러 타학과 친구들이랑 알게 되어서
                  좋았어요!
                  <img
                    className="end-quote"
                    src={EndQuote}
                    align="right"
                    alt=""
                  />
                </p>
                <div>순천향대 최X현님</div>
              </ReviewCard>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="numberting">
        <h2>
          <span>아무나가 아닌</span>
          <br />
          교내 친구를 만나고 싶을 때
        </h2>
        <img src={Human2} alt="" />
        <p className="description">
          <span className="weight">남사친, 여사친을 만나고 싶을 때</span>
          <br />
          <br />
          <span className="pink">좌측 하단</span> 유니브팅 신청자의 번호를
          <br />
          <span className="red">우측 하단</span> 뽑기 신청자가 뽑게됩니다.
        </p>
        <img className="friendting" src={Human3} alt="" />
        <p className="description mb">
          <span className="weight">다양한 교내 친구를 만나고 싶을 때</span>
          <br />
          <br />
          <span className="pink">좌측 하단</span> 유니브팅 신청자의 번호를
          <br />
          <span className="red">우측 하단</span> 뽑기 신청자가 뽑게됩니다.
        </p>
      </div>
      <Divbar />
    </MainContentWrap>
  );
};

const MainContentWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 360px;
  width: 100%;
  margin: 0 auto;
  & > div {
    display: flex;
    justify-content: center;
  }
  img {
    height: 100%;
    width: 100%;
  }
  .action-wrap {
    width: 100%;
    background: white;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    box-shadow: 0px 0px 6px #00000029;
    a + a {
      margin-left: 5rem;
    }
  }
  .intro {
    flex-direction: column;
    text-align: center;
    font-family: "Noto Sans KR";
    p {
      font-size: 18px;
      margin-top: 8rem;
      font-weight: 500;
      color: #adb5bd;
    }
    h1 {
      font-size: 48px;
      color: #dd678b;
      font-family: "Garam";
    }
    img {
      padding: 0 0.5rem;
    }
  }
  .review,
  .numberting {
    flex-direction: column;
    font-family: "Noto Sans KR";
    line-height: 1.5;
    h2 {
      font-weight: 500;
      margin-top: 8rem;
      padding-left: 1rem;
      span {
        color: #adb5bd;
      }
    }
    .description {
      text-align: center;
      font-size: 18px;
      margin-top: 1rem;
      .weight {
        font-size: 20px;
      }
      .weight,
      .pink,
      .red {
        font-weight: 600;
      }
      .pink {
        color: #ffa4ce;
      }
      .red {
        color: #ca415a;
      }
    }
    .friendting {
      margin-top: 8rem;
    }
    .mb {
      margin-bottom: 3rem;
    }
  }
  .swiper-pagination-bullets {
    bottom: 0px;
  }
  @media screen and (max-width: 500px) {
    max-width: 100vw;
    width: 100%;
    margin: 0;
    .swiper-pagination-bullets {
      bottom: 0px;
    }
    img {
      width: 100vw;
      height: 100%;
    }
    .action-wrap {
      padding: 1rem 0;
      a + a {
        margin-left: 2rem;
      }
    }
    .review,
    .numberting {
      h2 {
        margin-top: 5rem;
      }
    }
    .intro {
      p {
        margin-top: 5rem;
      }
    }
    .friendting {
      margin-top: 5rem;
    }
  }
  @media screen and (max-width: 360px) {
    max-width: 100vw;
    width: 100%;
    margin: 0;
    .swiper-pagination-bullets {
      bottom: 0px;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .action-wrap {
      padding: 1rem 0;
      a + a {
        margin-left: 3rem;
      }
      button {
        font-size: 30px;
        padding: 0.5rem 1.5rem;
      }
    }
  }
`;

const ReviewCard = styled.div`
  border: 1px solid ${oc.gray[3]};
  padding: 1rem;
  box-shadow: 0px 0px 6px #00000029;
  border-radius: 10px;
  margin: 0 1rem;
  height: 180px;
  img {
    height: 1rem;
    width: 1rem;
    display: inline;
  }
  p {
    margin-top: 0;
    word-break: keep-all;
    text-align: left;
    .start-quote {
      margin-right: 0.5rem;
    }
    .end-quote {
      text-align: end;
    }
  }
  div {
    text-align: end;
    margin-top: 1rem;
    font-size: 14px;
  }
`;

const Divbar = styled.div`
  height: 80px;
  width: 100%;
`;

const ApplyButton = styled(Button)`
  border: 0;
  background: radial-gradient(ellipse at top, #fffff0, transparent),
    radial-gradient(ellipse at bottom, #ffdbec, transparent);
  color: #ca415a;
  @media screen and (max-width: 500px) {
    font-size: 32px;
    padding: 1rem 2rem;
  }
`;

const DrawButton = styled(Button)`
  border: 0;
  color: white;
  background: radial-gradient(ellipse at top, #ffc2c2, transparent),
    radial-gradient(ellipse at bottom, #ffa4ce, transparent);
  @media screen and (max-width: 500px) {
    font-size: 32px;
    padding: 1rem 2rem;
  }
`;

export default MainContent;
