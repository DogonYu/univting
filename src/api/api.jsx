import axios from "axios";

const API = axios.create({
  baseURL: "http://univting.cc:80",
});

export const applyAPI = {
  applySubmit(values) {
    return API.post(`/api/apply`, values);
  },
};

export const drawAPI = {
  drawSubmit(values) {
    return API.post(`/api/vote`, values);
  },
};

export const adminAPI = {
  readApplyList() {
    return API.get(`/api/admin/applicant`);
  },
  readDrawList() {
    return API.get(`/api/admin/voter`);
  },
  togglePayment(voterId) {
    return API.post(`/api/admin/checkPayment`, voterId);
  },
  randomDraw(voterId) {
    return API.post("/api/admin/voting", voterId).then((res) => {
      prompt(
        "",
        `[번호팅]\n${res.data.result.numbertingList
          .map((list) => `닉네임: ${list.nick} 전화번호: ${list.phone}\n`)
          .join("")}
        \n[베프팅]\n${res.data.result.friendtingList
          .map((list) => `닉네임: ${list.nick} 전화번호: ${list.phone}\n`)
          .join("")}`
      );
      return res;
    });
  },
};
