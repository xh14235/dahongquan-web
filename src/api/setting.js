import request from "@/utils/request";

const api = {
  baseSetting: "baseSetting",
  bannerList: "bannerList",
};

export const baseSetting = (params) => {
  return request({
    url: api.baseSetting,
    method: "GET",
    params,
  });
};

export const bannerList = (params) => {
  return request({
    url: api.bannerList,
    method: "GET",
    params,
  });
};
