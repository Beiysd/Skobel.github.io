/*
 * @name:
 * @author: wuxd
 * @Date: 2021-04-22 09:25:01
 * @LastEditTime: 2021-04-22 14:40:31
 */
import $ from "jquery";
var nowPageUrl = "";

//入口方法
export function getCount(path) {
  nowPageUrl = path;
  return new Promise((resolve, reject) => {
    getBaidu().then((res) => {
      resolve(res);
    });
  });
}

//请求百度统计公开接口获取统计数据
async function getBaidu() {
  // https://openapi.baidu.com/rest/2.0/tongji/report/getData?access_token=121.06955779cbbdf0cf5db9a00aaed14cb6.YaRgS3s714yunGALmTy_irKuj9aVrH55jW46WPT.QBq_tQ&site_id=16582445&method=visit/toppage/a&start_date=20210401&end_date=20310401&metrics=pv_count,visitor_count
  var num = 0;
  await $.ajax({
    type: "get",
    dataType: "jsonp",
    url: "https://openapi.baidu.com/rest/2.0/tongji/report/getData",
    data: {
      access_token:
        "121.06955779cbbdf0cf5db9a00aaed14cb6.YaRgS3s714yunGALmTy_irKuj9aVrH55jW46WPT.QBq_tQ", //
      site_id: "16582445",
      method: "overview/getCommonTrackRpt",
      start_date: "20210401",
      end_date: "20310401",
      metrics: "pv_count",
    },
    success: function(res) {
      // console.log("res==", res);
      // return res.result;
      num = visiteNum(res.result);
    },
    error: function(err) {
      console.log("error======", err);
      // return null;
    },
  });
  return num;
}

//计算对应页面的浏览量
function visiteNum(data) {
  var visite = 0;
  //计算总浏览量
  if (nowPageUrl === "home" && data && data.sourceSite) {
    visite = data.sourceSite.items[0][1];
  } else if (data && data.visitPage) {
    //计算单页面浏览量
    // encodeURI-转码
    // decodeURI-解码
    //受访页面列表
    const items = data.visitPage.items || [];
    //当前页面完整地址
    const pathurl = window.location.origin + nowPageUrl;
    for (let i = 0; i < items.length; i++) {
      if (items[i][0] === pathurl) {
        visite = items[i][1];
      }
    }
  }
  return visite;
}
