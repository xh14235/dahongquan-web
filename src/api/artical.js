import request from "@/utils/request";

const api = {
  articalInfo: "articalInfo",
};

export const articalInfo = (data) => {
  return request({
    url: api.articalInfo,
    method: "POST",
    data,
  });
};
