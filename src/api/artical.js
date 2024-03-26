import request from "@/utils/request";

const api = {
  articalInfo: "articalInfo",
  articalList: "articalList",
};

export const articalInfo = (data) => {
  return request({
    url: api.articalInfo,
    method: "POST",
    data,
  });
};

export const articalList = (data) => {
  return request({
    url: api.articalList,
    method: "POST",
    data,
  });
};
