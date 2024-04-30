import request from "@/utils/request";

const api = {
  addMessage: "addMessage",
};

export const addMessage = (data) => {
  return request({
    url: api.addMessage,
    method: "POST",
    data,
  });
};
